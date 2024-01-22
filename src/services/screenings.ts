import axios from "../core/api";
export const getScreenings = async () => {
  try {
    const response = await axios.get(`/screenings`);
    return response.data;
  } catch (error) {
    console.log(`get_Screenings`, error);
  }
};
export const getMovieScreenings = async (id:string) => {
  try {
    const response = await axios.get(`/screenings/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Screenings`, error);
  }
};
export const addScreenings = async (value: typeScreeningsValue) => {
  try {
    const response = await axios.post(`/screenings`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Screenings`, error);
  }
};
export const updateScreenings = async (value: typeScreenings) => {
  try {
    const response = await axios.put(`/screenings/${value._id}`, {
      timeSlots: value.timeSlots,
      movies: [value.movies],
      cinemas: [value.cinemas],
      date: value.date,
    });
    return response.data;
  } catch (error) {
    console.log(`get_Screenings`, error);
  }
};
export const deleteScreenings = async (id: string) => {
  try {
    const response = await axios.delete(`/screenings/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Screenings`, error);
  }
};
