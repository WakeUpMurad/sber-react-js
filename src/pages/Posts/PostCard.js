import React, { useState } from 'react'
import { Avatar, Card, Modal, Input } from 'antd'
import { EditOutlined, SaveFilled, DeleteFilled, SettingOutlined } from '@ant-design/icons'
import classes from './PostCard.module.css'

const { TextArea } = Input
const { Meta } = Card

const PostCard = ({ title, body = '', url, id, userID, withAction = true, handleModalOk, setTitle, setBody }) => {
  const [open, setOpen] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  const handleOk = () => {
    handleModalOk()
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  return (
    <>
      <Card
        className={classes.card}
        hoverable
        cover={
          <img
            alt="img"
            src={url}
          />
        }
        actions={
          withAction && [
            <SettingOutlined
              key="setting"
              onClick={(event) => {
                console.log(event.target)
              }}
            />,
            toggleEdit ? (
              <SaveFilled
                key="save"
                onClick={() => {
                  setToggleEdit(!toggleEdit)
                }}
              />
            ) : (
              <EditOutlined
                key="edit"
                onClick={() => {
                  setToggleEdit(!toggleEdit)
                }}
              />
            ),
            <DeleteFilled
              key="delete"
              onClick={() => {
                setOpen(true)
              }}
            />,
          ]
        }
      >
        <div className={classes.body}>
          <Meta
            avatar={
              <Avatar
                src={url}
                alt={`${userID}`}
              />
            }
            title={
              toggleEdit ? (
                <Input
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                `${id}. ${title}`
              )
            }
            description={
              toggleEdit ? (
                <TextArea
                  rows={4}
                  maxLength={250}
                  placeholder="Enter post description. maxLength is 250"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              ) : (
                `Post by User ID ${userID}. ${body}`
              )
            }
            className={classes.meta}
          />
        </div>
      </Card>
      <Modal
        title="Удалить данный пост?"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  )
}

export default PostCard
