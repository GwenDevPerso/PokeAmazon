// A mock function to mimic making an async request for data
import axios from "axios"

export async function fetchAllPokemons(limit: number, offset: number, search: string) {
  try {
    const response = await axios.get(`http://localhost:8000/api/all?limit=${limit}&offset=${offset}&search=${search}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
