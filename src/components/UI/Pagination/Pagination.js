import { Pagination as AntPagination } from 'antd'
import classes from './Pagination.module.css'

const Pagination = ({ defaultCurrent, defaultPageSize, total, onChange }) => {
  return (
    <div className={classes.pagination}>
      <AntPagination
        showQuickJumper
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        total={total}
        onChange={onChange}
      />
    </div>
  )
}

export default Pagination
