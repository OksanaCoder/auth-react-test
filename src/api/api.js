// api.js
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const secret = process.env.REACT_APP_SECRET;

export const loginApiCall = async (email, password) => {
  try {
    const response = await fetch(`${apiUrl}/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Authentication successful:", data);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await fetch(`${apiUrl}/v1/auth/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        redirect_url: "https://auth-qa.qencode.com/password-set",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Authentication successful:", data);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const setNewPassword = async (password, confirmedPassword) => {
  try {
    const response = await fetch(`${apiUrl}/v1/auth/password-set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        token: `${apiKey}`,
        secret: `${secret}`,
        password: password,
        password_confirm: confirmedPassword,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Authentication successful:", data);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
