import axios from "../core/api";
export const getCinemas = async () => {
  try {
    const response = await axios.get(`/cinemas`);
    return response.data;
  } catch (error) {
    console.log(`get_Cinemas`, error);
  }
};
export const addCinemas = async (value: typeCinemasValue) => {
  try {
    const response = await axios.post(`/cinemas`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Cinemas`, error);
  }
};
export const updateCinemas = async (value: typeCinemas) => {
  try {
    const response = await axios.put(`/cinemas/${value._id}`, {
      name: value.name,
      location: value.location,
      pointLat: value.pointLat,
      pointLng: value.pointLng,
      slug: value.slug,
    });
    return response.data;
  } catch (error) {
    console.log(`get_Cinemas`, error);
  }
};
export const deleteCinemas = async (id: string) => {
  try {
    const response = await axios.delete(`/cinemas/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Cinemas`, error);
  }
};
