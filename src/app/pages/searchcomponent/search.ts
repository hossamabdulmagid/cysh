import {Result} from "../../services/movies/movies";

export interface Search {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
}
