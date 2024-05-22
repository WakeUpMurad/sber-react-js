import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import PostCard from './PostCard'
import classes from './SinglePost.module.css'
import data from '../../../data/data.json'
import MyButton from '../../ui/MyButton/MyButton'

const SinglePost = () => {
  const params = useParams()
  const navigate = useNavigate()

  const post = data.posts.find((post) => post.id === +params.id)
  useEffect(() => {
    if (!post) {
      navigate('..', { relative: 'path' })
    }
  }, [post, navigate])
  return (
    <div className={classes.container}>
      <Link
        to=".."
        relative="path"
        className={classes.backLink}
      >
        <MyButton
          type="primary"
          ghost
          className={classes.backBtn}
        >
          <LeftOutlined />
          Back to Posts
        </MyButton>
      </Link>
      <div className={classes.content}>
        <PostCard {...post} />
      </div>
    </div>
  )
}

export default SinglePost
