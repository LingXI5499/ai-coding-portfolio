// Focused MVC / MyBatis excerpts: imports, dependency injection, authorization
// infrastructure and exception advice are required in the actual Java project.
export function productionOperationCode(lesson){
  const names={};
  if(lesson.id==='create-employee')return {
    request:'POST /employees\nContent-Type: application/json\n\n{"id":9,"username":"ivan","name":"郑十一",\n "departmentId":1,"salary":8500}',
    controller:`record CreateEmployeeRequest(
    @Positive long id, @NotBlank String username,
    @NotBlank String name, @Positive long departmentId,
    @Min(0) long salary) {}

record EmployeeView(long id, String username,
    String name, long departmentId, long salary) {}

@PostMapping("/employees")
public ResponseEntity<EmployeeView> create(
    @Valid @RequestBody CreateEmployeeRequest dto) {
  return ResponseEntity.status(HttpStatus.CREATED)
      .body(employeeService.create(dto));
}`,
    service:`@Transactional
public EmployeeView create(CreateEmployeeRequest dto) {
  // 实际项目在此检查当前用户权限、部门是否有效。
  // 本课显式主键；生产自增主键通过生成键回填。
  employeeMapper.createEmployee(dto.id(), dto.username(),
      dto.name(), dto.departmentId(), dto.salary());
  // 唯一键冲突由数据库裁决；异常向外传播以回滚。
  return new EmployeeView(dto.id(), dto.username(),
      dto.name(), dto.departmentId(), dto.salary());
}`
  };
  if(lesson.id==='read-by-id')return {
    request:'GET /employees/3',
    controller:`@GetMapping("/employees/{id}")
public Map<String, Object> detail(@PathVariable long id) {
  return employeeService.detail(id);
}

// 统一异常处理类中的方法：业务异常映射为 HTTP。
@ExceptionHandler(EmployeeNotFoundException.class)
public ResponseEntity<Map<String, String>> notFound(
    EmployeeNotFoundException e) {
  return ResponseEntity.status(HttpStatus.NOT_FOUND)
      .body(Map.of("message", "员工不存在"));
}`,
    service:`public Map<String, Object> detail(long id) {
  // 这里只用 Map 展示列映射，正式接口建议明确 VO。
  List<Map<String, Object>> rows = employeeMapper.readById(id);
  if (rows.isEmpty()) throw new EmployeeNotFoundException(id);
  // 主键唯一性保证最多一行；getFirst 是 Java 21 API。
  return rows.getFirst();
}

class EmployeeNotFoundException extends RuntimeException {
  EmployeeNotFoundException(long id) {
    super("employee not found: " + id);
  }
}`
  };
  if(lesson.id==='update-by-id')return {
    request:'PATCH /employees/3\nContent-Type: application/json\n\n{"name":"王五改名"}',
    controller:`record RenameEmployeeRequest(@NotBlank String name) {}

@PatchMapping("/employees/{id}")
public ResponseEntity<Void> rename(@PathVariable long id,
    @Valid @RequestBody RenameEmployeeRequest dto) {
  employeeService.rename(id, dto.name());
  return ResponseEntity.noContent().build();
}`,
    service:`@Transactional
public void rename(long id, String name) {
  // affected=0 也可能是“值没有改变”，取决于驱动配置。
  // 因此不机械地把 0 当作不存在。
  employeeMapper.updateById(name, id);
  if (employeeMapper.readById(id).isEmpty()) {
    throw new EmployeeNotFoundException(id);
  }
  // 查询与写入必须遵守相同租户、权限和删除状态约束。
  // 并发业务若要拒绝覆盖，使用下一课的版本条件更新。
}`
  };
  if(lesson.id==='delete-by-id')return {
    request:'DELETE /employees/8',
    controller:`@DeleteMapping("/employees/{id}")
public ResponseEntity<Void> delete(@PathVariable long id) {
  employeeService.delete(id);
  // 此接口约定重复删除也返回 204，无需暴露历史存在性。
  return ResponseEntity.noContent().build();
}`,
    service:`@Transactional
public void delete(long id) {
  // 先鉴权；外键仍引用员工时，数据库拒绝删除。
  // 不能为让删除成功而关闭外键校验。
  employeeMapper.deleteById(id);
  // 此契约不把 0 行当成错误；与返回 404 的契约要区分。
}`
  };
  return names;
}
