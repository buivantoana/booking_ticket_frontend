type typeFood = {
  _id: string;
  name: string;
  image: any;
  price: string;
  slug: string;
};
type typeFoodValue = Omit<typeFood, "_id">;
