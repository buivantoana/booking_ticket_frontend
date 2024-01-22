type typeMovie = {
  backdrop_path: string;
  genders: [string];
  movie_id: number;
  overview: string;
  poster_path1: string;
  poster_path2: string;
  release_date: string;
  times: string;
  title: string;
  traler: string;
  _id: string;
};

type typeValueMovie = Omit<typeMovie, "_id">;
