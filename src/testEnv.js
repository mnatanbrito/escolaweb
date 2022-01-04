export const initTestEnv = () => {
  process.env = {
    // firebase related
    REACT_APP_FIREBASE_API_KEY: '',
    REACT_APP_FIREBASE_AUTH_DOMAIN: '',
    REACT_APP_FIREBASE_DATABASE_URL: '',
    REACT_APP_FIREBASE_PROJECT_ID: '',
    REACT_APP_FIREBASE_STORAGE_BUCKET: '',
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: '',
    REACT_APP_FIREBASE_APP_ID: '',

    // general
    REACT_APP_FEATURE_SIGN_UP: false,
  }
}
