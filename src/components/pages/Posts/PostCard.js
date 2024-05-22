import { Avatar, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import classes from './PostCard.module.css'

const { Meta } = Card
const PostCard = ({ url, title, body = '', id, userID, withAction = true }) => {
  return (
    <Card
      className={classes.card}
      hoverable
      cover={
        <img
          alt="img"
          src={url}
        />
      }
      actions={withAction && [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
    >
      <div className={classes.body}>
        <Meta
          avatar={
            <Avatar
              src={url}
              alt={`${userID}`}
            />
          }
          title={`${id}. ${title}`}
          description={`Post by User ID ${userID}. ${body}`}
          className={classes.meta}
        />
      </div>
    </Card>
  )
}

export default PostCard
