type typeScreenings = {
  _id: string;
  date: string;
  timeSlots: any[];
  movies: typeMovie[];
  cinemas: typeCinemas[];
};
type typeScreeningsValue = Omit<typeScreenings, "_id">;
