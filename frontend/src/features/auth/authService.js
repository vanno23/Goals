const API_URL = "https://goals-19r7.onrender.com/api/users";

// Register user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } else {
    throw new Error("Registration failed");
  }
};

// Login user
const login = async (userData) => {
  const response = await fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } else {
    throw new Error("Login failed");
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
