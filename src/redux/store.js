import { configureStore } from '@reduxjs/toolkit'
import userReeducer from './slices/userSlice'
import postsReeducer from './slices/postsSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  reducer: { user: userReeducer, posts: postsReeducer, error: errorReducer },
})

export default store
