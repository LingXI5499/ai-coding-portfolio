package com.lingxi.evolution.query;

import jakarta.validation.constraints.*;

/** 可选条件按 AND 组合；没有条件就是普通分页查询。 */
public class EmployeeQuery extends PageQuery {
    @Size(max = 50)
    private String name;

    @Size(max = 100)
    private String department;

    @Pattern(regexp = "男|女|未说明")
    private String gender;

    @Min(18)
    @Max(70)
    private Integer minAge;

    @Min(18)
    @Max(70)
    private Integer maxAge;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = normalize(name);
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = normalize(department);
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = normalize(gender);
    }

    public Integer getMinAge() {
        return minAge;
    }

    public void setMinAge(Integer minAge) {
        this.minAge = minAge;
    }

    public Integer getMaxAge() {
        return maxAge;
    }

    public void setMaxAge(Integer maxAge) {
        this.maxAge = maxAge;
    }

    public String getNamePattern() {
        return LikePattern.contains(name);
    }

    public String getDepartmentPattern() {
        return LikePattern.contains(department);
    }

    @AssertTrue(message = "最小年龄不能大于最大年龄")
    public boolean isAgeRangeValid() {
        return minAge == null || maxAge == null || minAge <= maxAge;
    }

    private static String normalize(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }
}
