package com.lingxi.evolution;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional
class EmployeeIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    private final String input =
            "{\"name\":\"教学员工\",\"gender\":\"未说明\",\"age\":25,\"phone\":\"\",\"department\":\"研发\",\"salary\":8000}";

    @Test
    void completeCrudUsesRealMapper() throws Exception {
        var result =
                mvc.perform(post("/api/employees").contentType("application/json").content(input))
                        .andExpect(status().isCreated())
                        .andReturn();
        long id =
                json.readTree(result.getResponse().getContentAsString())
                        .path("data")
                        .path("id")
                        .asLong();
        mvc.perform(get("/api/employees/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.name").value("教学员工"));
        mvc.perform(
                        put("/api/employees/" + id)
                                .contentType("application/json")
                                .content(input.replace("8000", "9000")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.salary").value(9000));
        mvc.perform(get("/api/employees")).andExpect(status().isOk());
        mvc.perform(delete("/api/employees/" + id)).andExpect(status().isOk());
        mvc.perform(get("/api/employees/" + id)).andExpect(status().isNotFound());
    }

    @Test
    void sqlInjectionStaysAValue() throws Exception {
        mvc.perform(
                        post("/api/employees")
                                .contentType("application/json")
                                .content(input.replace("教学员工", "x'; DROP TABLE employee; --")))
                .andExpect(status().isCreated());
        mvc.perform(get("/api/employees")).andExpect(status().isOk());
    }

    @Test
    void invalidAndMissingInputsReturnStableErrors() throws Exception {
        mvc.perform(post("/api/employees").contentType("application/json").content("{}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value("INVALID_INPUT"));
        mvc.perform(get("/api/employees/9999999"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.code").value("EMPLOYEE_NOT_FOUND"));
        mvc.perform(get("/api/employees/not-a-number")).andExpect(status().isBadRequest());
    }
}
