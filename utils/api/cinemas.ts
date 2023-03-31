import { AxiosInstance } from 'axios'

import { CinemaType } from '../../types'

export const CinemasApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<CinemaType[]>('/cinemas')
    return data
  },

  async getOne(id: string) {
    const { data } = await instance.get<CinemaType>(`/cinemas/${id}`)
    return data
  },
})
