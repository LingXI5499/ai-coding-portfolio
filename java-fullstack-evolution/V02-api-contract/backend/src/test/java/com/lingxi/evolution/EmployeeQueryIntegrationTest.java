package com.lingxi.evolution;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional
class EmployeeQueryIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired JdbcTemplate jdbc;

    private void employee(String name, String department, int age) {
        jdbc.update(
                "INSERT INTO employee(name,gender,age,phone,department,salary) VALUES(?, '未说明', ?,"
                        + " '', ?, 8000)",
                name,
                age,
                department);
    }

    private JsonNode page(MockHttpServletRequestBuilder request) throws Exception {
        var result = mvc.perform(request).andExpect(status().isOk()).andReturn();
        return json.readTree(result.getResponse().getContentAsString()).path("data");
    }

    @Test
    void combinedConditionsUseSameCountAndPageFilters() throws Exception {
        employee("条件甲", "研发一部", 25);
        employee("条件乙", "研发二部", 30);
        employee("条件丙", "研发一部", 40);
        employee("条件丁", "市场", 25);
        var data =
                page(
                        get("/api/employees")
                                .param("name", "条件")
                                .param("department", "研发")
                                .param("minAge", "25")
                                .param("maxAge", "30")
                                .param("pageSize", "1"));
        assertThat(data.path("total").asLong()).isEqualTo(2);
        assertThat(data.path("totalPages").asLong()).isEqualTo(2);
        assertThat(data.path("records").size()).isEqualTo(1);
        assertThat(data.path("records").get(0).path("name").asText()).isEqualTo("条件甲");
        var next =
                page(
                        get("/api/employees")
                                .param("name", "条件")
                                .param("department", "研发")
                                .param("minAge", "25")
                                .param("maxAge", "30")
                                .param("pageSize", "1")
                                .param("page", "2"));
        assertThat(next.path("total").asLong()).isEqualTo(2);
        assertThat(next.path("records").get(0).path("name").asText()).isEqualTo("条件乙");
    }

    @Test
    void defaultPaginationAndPagesBeyondFormer200RowLimitWork() throws Exception {
        List<Object[]> rows = new ArrayList<>();
        for (int i = 0; i < 205; i++) {
            rows.add(new Object[] {"批量员工" + i});
        }
        jdbc.batchUpdate(
                "INSERT INTO employee(name,gender,age,phone,department,salary) VALUES(?, '未说明', 25,"
                        + " '', '批量研发', 8000)",
                rows);
        var first = page(get("/api/employees").param("department", "批量研发"));
        assertThat(first.path("page").asInt()).isEqualTo(1);
        assertThat(first.path("pageSize").asInt()).isEqualTo(10);
        assertThat(first.path("total").asLong()).isEqualTo(205);
        assertThat(first.path("records").size()).isEqualTo(10);
        var last =
                page(
                        get("/api/employees")
                                .param("department", "批量研发")
                                .param("pageSize", "100")
                                .param("page", "3"));
        assertThat(last.path("records").size()).isEqualTo(5);
        assertThat(last.path("totalPages").asLong()).isEqualTo(3);
    }

    @Test
    void emptyConditionsAndOutOfRangePageHavePredictableMetadata() throws Exception {
        employee("空白筛选", "研发", 25);
        var all = page(get("/api/employees").param("name", "   ").param("department", ""));
        assertThat(all.path("total").asLong()).isEqualTo(1);
        var absent = page(get("/api/employees").param("name", "不存在的员工"));
        assertThat(absent.path("records").isEmpty()).isTrue();
        assertThat(absent.path("total").asLong()).isZero();
        assertThat(absent.path("totalPages").asLong()).isZero();
        var beyond = page(get("/api/employees").param("page", "999999"));
        assertThat(beyond.path("records").isEmpty()).isTrue();
        assertThat(beyond.path("page").asInt()).isEqualTo(999999);
        assertThat(beyond.path("total").asLong()).isEqualTo(1);
    }

    @Test
    void wildcardCharactersAndSqlInjectionAreLiteralValues() throws Exception {
        employee("包含%_!字符", "研发", 25);
        employee("普通字符", "研发", 25);
        var literal = page(get("/api/employees").param("name", "%_!"));
        assertThat(literal.path("total").asLong()).isEqualTo(1);
        var injected = page(get("/api/employees").param("name", "%' OR 1=1 --"));
        assertThat(injected.path("total").asLong()).isZero();
        assertThat(page(get("/api/employees")).path("total").asLong()).isEqualTo(2);
    }

    @Test
    void invalidPageSizeTypeLengthAndAgeRangeAreRejected() throws Exception {
        for (String value : List.of("0", "-1", "1000001", "not-a-number", "2147483648")) {
            mvc.perform(get("/api/employees").param("page", value))
                    .andExpect(status().isBadRequest());
        }
        for (String value : List.of("0", "-1", "101", "not-a-number")) {
            mvc.perform(get("/api/employees").param("pageSize", value))
                    .andExpect(status().isBadRequest());
        }
        mvc.perform(get("/api/employees").param("minAge", "40").param("maxAge", "20"))
                .andExpect(status().isBadRequest());
        mvc.perform(get("/api/employees").param("minAge", "17")).andExpect(status().isBadRequest());
        mvc.perform(get("/api/employees").param("name", "长".repeat(51)))
                .andExpect(status().isBadRequest());
        mvc.perform(get("/api/employees").param("gender", "invalid"))
                .andExpect(status().isBadRequest());
    }
}
