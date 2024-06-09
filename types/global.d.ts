export {}

declare global {
  interface PageWithParamsProps {
    params: Record<string, string>
    searchParams: Record<string, string>
  }

  interface ResponseMeta {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }

  interface RequestWithPagination<T> {
    meta: ResponseMeta
    data: T[]
  }
}
