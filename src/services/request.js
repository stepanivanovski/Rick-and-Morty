
const baseApi = "http://173.249.20.184:7001/";

export const request = {
  post : async (url, data, headers) => {
    const options = (headers) ? 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data
    } :
    { method: "POST", body: data };

    let response = await fetch(`${baseApi}${url}`, options);

    if (!response.ok) {
      throw new Error(`Could not fetch ${baseApi}${url}, status: ${response.status}`);
    }

    return await response;
  },
  postImg : async (url, data) => {
    let response = await fetch(`${baseApi}${url}`, {
      method: "POST",
      body: data
    });

    if (!response.ok) {
      throw new Error(`Could not fetch ${baseApi}${url}, status: ${response.status}`);
    }

    return await response;
  },

  put : async (url, data) => {
    let response = await fetch(`${baseApi}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data
    });

    return await response.json();
  },

  get: async (url) => {
    const response =  await fetch(`${baseApi}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${baseApi}${url}, status: ${response.status}`);
    }

    return await response.json();
  }
}
