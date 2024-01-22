type typeGender = {
   _id:string,
  name: string;
  movies: [];
}
type typeGenderValue = Omit<typeGender,"_id">
