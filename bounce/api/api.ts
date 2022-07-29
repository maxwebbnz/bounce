import axios from "axios";

const instance = axios.create({
  baseURL: "https://bouncenz-api.herokuapp.com",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

let api = async (_method: string, _endpoint: string, _details: string) => {
  try {
    const resp = await instance({
      method: _method,
      url: _endpoint,
      data: _details,
    });
    return resp.data;
  } catch (err) {
    return err;
  }
};

export default api;
