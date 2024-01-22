import axios from "axios";

export const getCast = async (id: number) => {
  try {
    const response = await axios.get(
      `http://api.themoviedb.org/3/movie/${id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`
    );
    return response;
  } catch (error) {
    console.log(`get_Cinemas`, error);
  }
};
