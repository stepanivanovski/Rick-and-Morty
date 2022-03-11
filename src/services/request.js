const baseApi = 'https://rickandmortyapi.com/api/'

export const request = {
  post: async (url, data, headers) => {
    const options = headers
      ? {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }
      : { method: 'POST', body: data }

    let response = await fetch(`${baseApi}${url}`, options)

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${baseApi}${url}, status: ${response.status}`
      )
    }

    return await response
  },
  get: async (url) => {
    const response = await fetch(`${baseApi}${url}`)

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${baseApi}${url}, status: ${response.status}`
      )
    }

    return await response.json()
  },
}
