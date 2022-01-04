import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import {isDevelopment} from '../env'
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

if (isDevelopment() && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
