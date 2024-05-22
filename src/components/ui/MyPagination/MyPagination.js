import { Pagination } from 'antd'
import classes from './MyPagination.module.css'

const MyPagination = ({ defaultCurrent, defaultPageSize, total, onChange }) => {
  return (
    <div className={classes.pagination}>
      <Pagination
        showQuickJumper
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        total={total}
        onChange={onChange}
      />
    </div>
  )
}

export default MyPagination
