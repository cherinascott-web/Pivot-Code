export type Movie = {
  id: number; // id is always a number
  title: string; // title is always a string
  poster_path: string;
  overview: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
};