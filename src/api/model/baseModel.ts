export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  // total: number;
}

export interface ListParams<T> {
  items: T[];
  // total: number;
}
