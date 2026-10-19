package com.lingxi.evolution.query;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

/** 页码从 1 开始，服务端限制每页大小与偏移范围。 */
public class PageQuery {
    @Min(1)
    @Max(1000000)
    private int page = 1;

    @Min(1)
    @Max(100)
    private int pageSize = 10;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public long getOffset() {
        return (long) (page - 1) * pageSize;
    }
}
