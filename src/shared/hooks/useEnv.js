const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

export default function useEnv() {
  return {
    isDev,
    isProd,
  }
}
