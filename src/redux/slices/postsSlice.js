import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import { setError } from './errorSlice'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (url, thunkAPI) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})
export const addNewPost = createAsyncThunk('posts/addNewPost', async (newPostData, thunkAPI) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/posts/`, newPostData)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (url, thunkAPI) => {
  try {
    const res = await axios.delete(url)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

export const fetchSearchResults = createAsyncThunk('posts/fetchSearchResults', async (url, thunkAPI) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

export const fetchSinglePost = createAsyncThunk('posts/fetchSinglePost', async (url, thunkAPI) => {
  try {
    const res = await axios.get(url, thunkAPI)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  singlePost: {},
  posts: [],
  totalPosts: 0,
  isLoading: false,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setInitialPosts: (state) => {
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload.posts
      state.totalPosts = action.payload.total
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(addNewPost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addNewPost.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(addNewPost.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(deletePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deletePost.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(deletePost.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload.posts
      state.totalPosts = action.payload.total
    })
    builder.addCase(fetchSearchResults.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchSinglePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.singlePost = action.payload
    })
    builder.addCase(fetchSinglePost.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setInitialPosts } = postsSlice.actions

export const selectPosts = (state) => state.posts.posts
export const selectSinglePost = (state) => state.posts.singlePost
export const selectTotalPosts = (state) => state.posts.totalPosts

export default postsSlice.reducer
