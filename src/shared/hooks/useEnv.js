export default function useEnv() {
  const isDev = process.env.NODE_ENV === 'development'
  const isProd = !isDev
  return {
    isDev,
    isProd,
  }
}
