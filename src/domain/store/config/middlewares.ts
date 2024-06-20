import type { GetDefaultMiddleware } from 'node_modules/@reduxjs/toolkit/dist/getDefaultMiddleware'

export const middlewares = [
]

export const useMiddleware = (getDefaultMiddleware: GetDefaultMiddleware) => (
  getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares)
)
