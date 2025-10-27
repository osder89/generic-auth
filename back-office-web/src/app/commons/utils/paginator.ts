export interface Paginator<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}


export const buildEmptyPaginator = <T>(number: number, size: number): Paginator<T> => ({
  content: [],
  empty: true,
  first: false,
  last: false,
  number,
  numberOfElements: 0,
  pageable: undefined,
  size,
  sort: undefined,
  totalElements: 0,
  totalPages: 0
});
