export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const debounce = (fn: (...args: any) => any, ms: number) => {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}
