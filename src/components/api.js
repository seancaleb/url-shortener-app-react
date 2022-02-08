const token = `${process.env.REACT_APP_REBRANDLY_API_KEY}`;

export const baseUrl = "https://api.rebrandly.com/v1/links";

export const axiosConfig = {
  headers: {
    apikey: token,
    "Content-Type": "application/json",
  },
};
