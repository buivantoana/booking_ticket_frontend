import axios from "../core/api";

export const Signup = async (email: typeAccount) => {
  try {
    const response = await axios.post(`/auth/signup`, email);
    return response.data;
  } catch (error) {
    console.log(`signup`, error);
  }
};

export const Signin = async (email: typeAccount) => {
  try {
    const response: any = await axios.post(`/auth/signin`, {
      email: email.email,
      password: email.password,
    });
    if (response.status === 1) {
      alert(response.message);
      return {};
    }
    return response;
  } catch (error) {
    console.log(`signup`, error);
  }
};
export const Authentication = async (token: string) => {
  try {
    const response = await axios.get(`/auth/authentication`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(`signup`, error);
  }
};

export const RefeshToken = async (token: string) => {
  try {
    const response = await axios.get(`/auth/refeshtoken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(`signup`, error);
  }
};
export const getUser = async () => {
  try {
    let user = localStorage.getItem("user");
    if (user) {
      const response = await axios.get(`/auth`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(user).token}`,
        },
      });
      return response.data;
    }
  } catch (error) {
    console.log(`get_User`, error);
  }
};
export const createUser = async (value: any) => {
  try {
    const response = await axios.post(`/auth/create`, value);
    return response.data;
  } catch (error) {
    console.log(`get_Role`, error);
  }
};
export const deleteUser = async (id: string) => {
  try {
    let user = localStorage.getItem("user");
    if (user) {
      const response = await axios.delete(`/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(user).token}`,
        },
      });
      return response;
    }
  } catch (error) {
    console.log(`get_Role`, error);
  }
};

export const updateUSer = async (value: any) => {
  try {
    const response = await axios.put(`/auth/${value._id}`, {
      email: value.email,
      role: value.role,
    });
    return response.data;
  } catch (error) {
    console.log(`get_Role`, error);
  }
};
