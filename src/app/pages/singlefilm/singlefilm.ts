export interface Genres {
  id: number;
  name: string;
}

export interface Belongs_to_Collection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export interface Production_Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_Countries {
  iso_3166_1: string;
  name: string;
}

export interface Spoken_Languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface SingleFilm {
  id: number;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: Belongs_to_Collection;
  production_companies: Production_Companies[];
  production_countries: Production_Countries[];
  spoken_languages: Spoken_Languages[];
}
