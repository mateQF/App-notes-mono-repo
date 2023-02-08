import axios from 'axios'
const baseUrl = '/api/notes'

let token = null
export const setToken = newToken => {
  token = `Bearer ${newToken}`
}

export const getAll = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

export const create = async (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const { data } = await axios.post(baseUrl, newObject, config)
  return data
}

export const update = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const { data } = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return data
}
