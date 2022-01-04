import {isSignUpEnabled} from '../env'

const featureFlags = {
  SIGN_UP_ENABLED: isSignUpEnabled(),
}

export default featureFlags
