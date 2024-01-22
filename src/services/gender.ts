import axios from "../core/api";
export const getGender = async () => {
  try {
    const response = await axios.get(`/gender`);
    return response.data;
  } catch (error) {
    console.log(`get_gender`, error);
  }
};
export const addGender = async (value: typeGenderValue) => {
  try {
    const response = await axios.post(`/gender`, value);
    return response.data;
  } catch (error) {
    console.log(`get_gender`, error);
  }
};
export const updateGender = async (value: typeGender) => {
  try {
    const response = await axios.put(`/gender/${value._id}`, {
      name: value.name,
      movies: [],
    });
    return response.data;
  } catch (error) {
    console.log(`get_gender`, error);
  }
};
export const deleteGender = async (id: string) => {
  try {
    const response = await axios.delete(`/gender/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_gender`, error);
  }
};
