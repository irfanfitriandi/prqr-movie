export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(function (this: () => void) {
      func.apply(this, args)
    }, delay)
  }
}
