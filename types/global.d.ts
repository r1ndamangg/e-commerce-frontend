export {}

declare global {
  interface PageWithParams<> {
    params: Record<string, string>
  }
}
