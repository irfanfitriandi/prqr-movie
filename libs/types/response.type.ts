export interface ResponsePopular extends PaginatedResponse<Movie> {}

export interface ResponseNowPlaying extends PaginatedResponse<Movie> {
  dates: Dates
}
