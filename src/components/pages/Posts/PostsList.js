import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Space, Col, Row, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import MySelect from '../../ui/MySelect/MySelect'
import MySearch from '../../ui/MySearch/MySearch'
import MyPagination from '../../ui/MyPagination/MyPagination'
import { paginateResults } from '../../../utils/paginate'
import PostCard from './PostCard'
import MyButton from '../../ui/MyButton/MyButton'
import classes from './PostsList.module.css'
import MyModal from '../../ui/MyModal/MyModal'

const options = [
  { value: 'title', label: 'Title' },
  { value: 'body', label: 'Description' },
]

const PostsList = ({ allPosts }) => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(10)
  const [filterSelect, setFilterSelect] = useState('title')
  const [totalPosts, setTotalPosts] = useState(1)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setPosts(paginateResults(allPosts, currentPage, currentPageSize))
    setTotalPosts(allPosts.length)
  }, [currentPage, currentPageSize, allPosts])

  const handlePageChange = (pageNumber, pageSize) => {
    setCurrentPage(pageNumber)
    setCurrentPageSize(pageSize)
  }

  const handleSearchChange = (event) => {
    const searchText = event.target.value
    const filteredPosts = allPosts.filter((post) => post[filterSelect].toLowerCase().includes(searchText.toLowerCase()))
    setTotalPosts(filteredPosts.length)
    setPosts(paginateResults(filteredPosts, currentPage, currentPageSize))
  }
  const addNewPost = (title, body, url = '') => {
    const userID = 1
    const id = allPosts.length + 1
    const newPost = { id, title, body, url, userID }
    allPosts.push(newPost)
  }
  return (
    <div className={classes.postsList}>
      <Space.Compact className={classes.actionField}>
        <div className={classes.filterAndSearch}>
          <MySelect
            defaultValue={filterSelect}
            options={options}
            onChange={(e) => setFilterSelect(e)}
          />
          <MySearch onChange={(e) => handleSearchChange(e)} />
        </div>
        <MyButton onClick={() => setShowModal(true)}>
          <PlusOutlined />
          Add new post
        </MyButton>
      </Space.Compact>
      {posts.length === 0 ? (
        <Spin
          tip="Loading..."
          size="large"
        >
          <>Posts not found</>
        </Spin>
      ) : (
        <>
          <Row className={classes.row}>
            {posts.map((post, index) => {
              const key = `col-${index}`
              return (
                <Col
                  className={classes.column}
                  key={key}
                  xs={{ flex: '100%' }}
                  sm={{ flex: '50%' }}
                  md={{ flex: '40%' }}
                  lg={{ flex: '20%' }}
                  xl={{ flex: '10%' }}
                >
                  <Link
                    to={`${post.id}`}
                    className={classes.cardLink}
                  >
                    <PostCard
                      {...post}
                      withAction={false}
                    />
                  </Link>
                </Col>
              )
            })}
          </Row>
          <MyPagination
            defaultCurrent={currentPage}
            defaultPageSize={currentPageSize}
            total={totalPosts}
            onChange={handlePageChange}
          />
        </>
      )}
      <MyModal
        show={showModal}
        setShow={setShowModal}
        addNewPost={addNewPost}
      />
    </div>
  )
}

export default PostsList
