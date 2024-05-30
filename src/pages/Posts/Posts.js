import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, addNewPost, fetchSearchResults, selectPosts, selectTotalPosts } from '../../redux/slices/postsSlice'
import { BACKEND_URL } from '../../constants'
import PostsList from './PostsList'
import classes from './Posts.module.css'

const Posts = () => {
  const posts = useSelector(selectPosts)
  const total = useSelector(selectTotalPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts(`${BACKEND_URL}/api/posts`))
  }, [dispatch])

  const handlePagginateChange = (page, limit) => {
    dispatch(fetchPosts(`${BACKEND_URL}/api/posts?page=${page}&limit=${limit}`))
  }

  const handleSearchChange = (filter, term, page, limit) => {
    dispatch(fetchSearchResults(`${BACKEND_URL}/api/posts/search?filter=${filter}&term=${term}&page=${page}&limit=${limit}`))
  }

  const handleAddNewPost = (title, body, url, userID) => {
    dispatch(addNewPost({ title, body, url, userID }))
  }

  return (
    <div className={classes.container}>
      <h1>Posts List</h1>
      <PostsList
        posts={posts}
        total={total}
        addNewPost={handleAddNewPost}
        handlePagginateChange={handlePagginateChange}
        handleSearchChange={handleSearchChange}
      />
    </div>
  )
}

export default Posts
