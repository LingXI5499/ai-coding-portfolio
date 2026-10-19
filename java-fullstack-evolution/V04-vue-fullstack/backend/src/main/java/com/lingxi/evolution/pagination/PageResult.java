package com.lingxi.evolution.pagination;

import com.lingxi.evolution.query.PageQuery;

import java.util.List;
import java.util.function.Function;

/** records 是当前页，total 是相同条件下的总数，不能用当前页长度代替。 */
public record PageResult<T>(List<T> records, long total, int page, int pageSize, long totalPages) {
    public static <T> PageResult<T> of(List<T> records, long total, PageQuery query) {
        long pages = total / query.getPageSize() + (total % query.getPageSize() == 0 ? 0 : 1);
        return new PageResult<>(records, total, query.getPage(), query.getPageSize(), pages);
    }

    public <R> PageResult<R> map(Function<T, R> converter) {
        return new PageResult<>(
                records.stream().map(converter).toList(), total, page, pageSize, totalPages);
    }
}
