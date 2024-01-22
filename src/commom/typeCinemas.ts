type typeCinemas = {
  _id: string;
  name: string;
  location: string;
  slug: string;
  pointLat: string;
  pointLng: string;
  
};
type typeCinemasValue = Omit<typeCinemas, "_id">;
