export interface Dates {
  maximum: string
  minimum: string
}

interface Spokenlanguage {
  english_name: string
  iso_639_1: string
  name: string
}

interface Productioncountry {
  iso_3166_1: string
  name: string
}

interface Productioncompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface Genre {
  id: number
  name: string
}

export interface Language {
  iso_639_1: string
  english_name: string
  name: string
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  genre_ids: number[]
}

export interface MovieDetail extends Movie {
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  origin_country: string[]
  production_companies: Productioncompany[]
  production_countries: Productioncountry[]
  revenue: number
  runtime: number
  spoken_languages: Spokenlanguage[]
  status: string
  tagline: string
}

interface Authordetails {
  name: string
  username: string
  avatar_path: string
  rating: number
}

export interface Review {
  author: string
  author_details: Authordetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}
