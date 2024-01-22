import axios from "../core/api";
export const getFood = async () => {
  try {
    const response = await axios.get(`/food`);
    return response.data;
  } catch (error) {
    console.log(`get_Food`, error);
  }
};
export const addFood = async (value: typeFoodValue) => {
  try {
    const response = await axios.post(`/food`, {
      ...value,
      price: Number(value.price),
    });
    return response.data;
  } catch (error) {
    console.log(`get_Food`, error);
  }
};
export const updateFood = async (value: typeFood) => {
  try {
    const response = await axios.put(`/food/${value._id}`, {
      name: value.name,
      price: Number(value.price),
      slug: value.slug,
      image: value.image,
    });
    return response.data;
  } catch (error) {
    console.log(`get_Food`, error);
  }
};
export const deleteFood = async (id: string) => {
  try {
    const response = await axios.delete(`/food/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Food`, error);
  }
};
