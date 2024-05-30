import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSinglePost, deletePost, selectSinglePost } from '../../redux/slices/postsSlice'
import { BACKEND_URL } from '../../constants'
import PostCard from './PostCard'
import Button from '../../components/UI/Button/Button'
import classes from './SinglePost.module.css'

const SinglePost = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const post = useSelector(selectSinglePost)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    dispatch(fetchSinglePost(`${BACKEND_URL}/api/posts/${params.id}`))
  }, [dispatch, params])

  useEffect(() => {
    setTitle(post.title)
    setBody(post.body)
    if (!post) {
      navigate('..', { relative: 'path' })
    }
  }, [post, navigate])

  const handleModalOk = () => {
    dispatch(deletePost(`${BACKEND_URL}/api/posts/${params.id}`))
    navigate('..', { relative: 'path' })
  }

  return (
    <div className={classes.container}>
      <Link
        to=".."
        relative="path"
        className={classes.backLink}
      >
        <Button
          type="primary"
          ghost
          className={classes.backBtn}
        >
          <LeftOutlined />
          Back to Posts
        </Button>
      </Link>
      <div className={classes.content}>
        <PostCard
          url={post.url}
          id={post.id}
          userID={post.userID}
          title={title}
          body={body}
          handleModalOk={handleModalOk}
          setTitle={setTitle}
          setBody={setBody}
        />
      </div>
    </div>
  )
}

export default SinglePost
