import axios from "../core/api";
export const getPost = async () => {
  try {
    const response = await axios.get(`/post`);
    return response.data;
  } catch (error) {
    console.log(`get_Post`, error);
  }
};
export const addPost = async (value: typePostValue) => {
  try {
    const response = await axios.post(`/post`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Post`, error);
  }
};
export const updatePost = async (value: typePost) => {
  try {
    const response = await axios.put(`/post/${value._id}`, {
      title: value.title,
      author: value.author,
      content: value.content,
      image: value.image,
      desc: value.desc,
    });
    return response.data;
  } catch (error) {
    console.log(`get_Post`, error);
  }
};
export const deletePost = async (id: string) => {
  try {
    const response = await axios.delete(`/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Post`, error);
  }
};
export const getOnePost = async (id: string) => {
  try {
    console.log(id);
    const response = await axios.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(`get_Post`, error);
  }
};
