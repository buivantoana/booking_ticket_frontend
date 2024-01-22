type typeBooking = {
  _id: string;
  address: string;
  cinemas: string;
  drink: string;
  email: string;
  fullname: string;
  movie: string;
  order_id: string;
  ordernote: string;
  phone: string;
  times: string;
  seats: string[];
  createdAt?: string;
  movies: any;
  notify: string;
};
type typeBookingValue = Omit<typeBooking, "_id">;
