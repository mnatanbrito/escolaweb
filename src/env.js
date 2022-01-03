export function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

export function isSignUpEnabled() {
  return JSON.parse(process.env.REACT_APP_FEATURE_SIGN_UP)
}
