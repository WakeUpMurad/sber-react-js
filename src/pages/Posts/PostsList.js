import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Space, Col, Row, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import PostCard from './PostCard'
import Select from '../../components/UI/Select/Select'
import Search from '../../components/UI/Search/Search'
import Pagination from '../../components/UI/Pagination/Pagination'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import classes from './PostsList.module.css'

const options = [
  { value: 'title', label: 'Title' },
  { value: 'body', label: 'Description' },
]

const PostsList = ({ posts, total, addNewPost, handlePagginateChange, handleSearchChange }) => {
  const [currentPosts, setCurrentPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(10)
  const [filterSelect, setFilterSelect] = useState('title')
  const [totalPosts, setTotalPosts] = useState(1)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setCurrentPosts(posts)
    setTotalPosts(total)
  }, [posts, total])

  const handlePageChange = (pageNumber, pageSize) => {
    handlePagginateChange(pageNumber, pageSize)
    setCurrentPage(pageNumber)
    setCurrentPageSize(pageSize)
  }

  const handleSearch = (event) => {
    const searchText = event.target.value
    handleSearchChange(filterSelect, searchText, currentPage, currentPageSize)
  }

  return (
    <div className={classes.postsList}>
      <Space.Compact className={classes.actionField}>
        <div className={classes.filterAndSearch}>
          <Select
            defaultValue={filterSelect}
            options={options}
            onChange={(e) => setFilterSelect(e)}
          />
          <Search onChange={(e) => handleSearch(e)} />
        </div>
        <Button onClick={() => setShowModal(true)}>
          <PlusOutlined />
          Add new post
        </Button>
      </Space.Compact>
      {currentPosts.length === 0 ? (
        <Spin
          tip="Loading..."
          size="large"
        >
          <>Posts not found</>
        </Spin>
      ) : (
        <>
          <Row className={classes.row}>
            {currentPosts.map((post, index) => {
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
          <Pagination
            defaultCurrent={currentPage}
            defaultPageSize={currentPageSize}
            total={totalPosts}
            onChange={handlePageChange}
          />
        </>
      )}
      <Modal
        show={showModal}
        setShow={setShowModal}
        onOkClick={addNewPost}
      />
    </div>
  )
}

export default PostsList
