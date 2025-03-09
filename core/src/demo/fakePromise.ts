export function fakePromise<T>(data: T, ms: number = 1000) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), ms)
  })
}
