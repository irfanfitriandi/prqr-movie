export const GENRE_OPTIONS = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
} as const

export const SORT_OPTIONS = [
  { label: 'Popularity (Descending)', value: SortBy.PopularityDesc },
  { label: 'Popularity (Ascending)', value: SortBy.PopularityAsc },
  { label: 'Release Date (Newest)', value: SortBy.ReleaseDateDesc },
  { label: 'Release Date (Oldest)', value: SortBy.ReleaseDateAsc },
  { label: 'Rating (Highest)', value: SortBy.RatingDesc },
  { label: 'Rating (Lowest)', value: SortBy.RatingAsc },
] as const
