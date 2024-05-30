import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setError } from './errorSlice'

export const getUserData = createAsyncThunk('user/getUserData', async ({ email, password, remember }, thunkAPI) => {
  console.log(email, password)
  try {
    const auth = getAuth()
    const user = await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      if (remember) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('email', user.email)
        localStorage.setItem('id', user.uid)
        localStorage.setItem('token', user.accessToken)
      }
      return {
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }
    })
    return user
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

export const registerUserData = createAsyncThunk('user/registerUserData', async ({ email, password, remember }, thunkAPI) => {
  try {
    const auth = getAuth()
    const user = await createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      if (remember) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('email', user.email)
        localStorage.setItem('id', user.uid)
        localStorage.setItem('token', user.accessToken)
      }
      return {
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }
    })
    return user
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})
const initialState = {
  email: null,
  token: null,
  id: null,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser: (state) => {
      state.email = null
      state.token = null
      state.id = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log(action)
      state.isLoading = false
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    })
    builder.addCase(getUserData.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(registerUserData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUserData.fulfilled, (state, action) => {
      console.log(action)
      state.isLoading = false
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    })
    builder.addCase(registerUserData.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setUser, removeUser } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
