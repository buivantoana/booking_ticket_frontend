import axios from "../core/api";
export const getMovie = async () => {
  try {
    const response = await axios.get(`/movie`);
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};
export const getOneMovie = async (id: string) => {
  try {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};
export const getSimilarMovie = async (id: string) => {
  try {
    const response = await axios.get(`/movie/similar/${id}`);
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};

export const addMovie = async (value: typeValueMovie) => {
  try {
    const response = await axios.post(`/movie`, value);
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};
export const updateMovie = async (value: typeMovie) => {
  try {
    const response = await axios.put(`/movie/${value._id}`, {
      title: value.title,
      release_date: value.release_date,
      times: value.times,
      traler: value.traler,
      overview: value.overview,
    });
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};
export const deleteMovie = async (id: string) => {
  try {
    const response = await axios.delete(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(`error Movie`, error);
  }
};
