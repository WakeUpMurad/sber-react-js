import { useEffect, useState } from 'react'
import data from '../../../data/data.json'
import classes from './Posts.module.css'
import PostsList from './PostsList'

const Posts = () => {
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    setAllPosts(() => data.posts)
  }, [])

  return (
    <div className={classes.container}>
      <h1>Posts List</h1>
      <PostsList allPosts={allPosts} />
    </div>
  )
}

export default Posts
