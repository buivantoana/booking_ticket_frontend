import axios from "axios";

export const uploadToCloudinary = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dmwgp0bx");
  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dbmj1ajrv/image/upload",
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
