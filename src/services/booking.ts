import axios from "../core/api";
export const addBooking = async (value: Omit<typeBookingValue, "notify">) => {
  try {
    const response = await axios.post(`/booking`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Booking`, error);
  }
};
export const getOneBooking = async (id: string) => {
  try {
    const response = await axios.get(`/booking/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Booking`, error);
  }
};
export const deleteBooking = async (id: string) => {
  try {
    const response = await axios.delete(`/booking/${id}`);
    return response;
  } catch (error) {
    console.log(`get_Booking`, error);
  }
};
export const updateNotifyBooking = async (id: string) => {
  try {
    const response = await axios.get(`/booking/notify/${id}`);
    return response;
  } catch (error) {
    console.log(`get_Booking`, error);
  }
};

export const emailBooking = async (value: { email: string }) => {
  try {
    const response = await axios.post(`/booking/email`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Booking`, error);
  }
};
