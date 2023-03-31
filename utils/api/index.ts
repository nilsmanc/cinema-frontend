import axios from 'axios'
import { GetServerSidePropsContext, NextPageContext } from 'next'
import { CinemasApi } from './cinemas'

import { MoviesApi } from './movies'

export type ApiReturnType = {
  movies: ReturnType<typeof MoviesApi>
  cinemas: ReturnType<typeof CinemasApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const instance = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'identity',
    },
  })

  const apis = {
    movies: MoviesApi,
    cinemas: CinemasApi,
  }

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    }
  }, {} as ApiReturnType)

  return result
}
