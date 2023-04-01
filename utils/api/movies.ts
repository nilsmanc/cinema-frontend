import { AxiosInstance } from 'axios'

import { MovieType } from '../../types'

export const MoviesApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<MovieType[]>('/movies')
    return data
  },

  async getOne(id: string) {
    const { data } = await instance.get<MovieType>(`/movies/${id}`)
    return data
  },

  async getCinemaMovies(id: string) {
    const { data } = await instance.get<MovieType>(`/cinema/movies/${id}`)
    return data
  },
})
