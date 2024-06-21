export const middlewares = [
]

export const useMiddleware = (getDefaultMiddleware: any) => (
  getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares)
)
