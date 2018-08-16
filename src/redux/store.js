import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import user from './reducers/user'

export default createStore(user, applyMiddleware(promiseMiddleware()));
