export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
  dates?: Dates
}

export enum SortBy {
  PopularityAsc = 'popularity.asc',
  PopularityDesc = 'popularity.desc',
  ReleaseDateAsc = 'release_date.asc',
  ReleaseDateDesc = 'release_date.desc',
  RatingAsc = 'vote_average.asc',
  RatingDesc = 'vote_average.desc',
}
