import React, { useEffect, useRef, useState } from 'react'
import { Modal as AntModal, Input } from 'antd'
import Draggable from 'react-draggable'
import Select from '../Select/Select'
import classes from './Modal.module.css'

const { TextArea } = Input

const options = [
  { value: 1, label: 'User №1' },
  { value: 2, label: 'User №2' },
  { value: 3, label: 'User №3' },
]

const Modal = ({ show, setShow, onOkClick }) => {
  useEffect(() => {
    if (show) {
      showModal()
    }
  }, [show])

  const [open, setOpen] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostDescription, setNewPostDescription] = useState('')
  const [newPostUrl, setNewPostUrl] = useState('')
  const [newPostUserID, setNewPostUserID] = useState(1)
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  })
  const draggleRef = useRef(null)
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    onOkClick(newPostTitle, newPostDescription, newPostUrl, newPostUserID)
    setShow(false)
    setOpen(false)
  }
  const handleCancel = () => {
    setShow(false)
    setOpen(false)
  }
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement
    const targetRect = draggleRef.current?.getBoundingClientRect()
    if (!targetRect) {
      return
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    })
  }
  return (
    <AntModal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
            textAlign: 'center',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false)
            }
          }}
          onMouseOut={() => {
            setDisabled(true)
          }}
          // fix eslintjsx-a11y/mouse-events-have-key-events
          // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
          onFocus={() => {}}
          onBlur={() => {}}
          // end
        >
          New Post
        </div>
      }
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          nodeRef={draggleRef}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Input
        placeholder="Enter post title"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        className={classes.newPostTitle}
      />
      <br />
      <TextArea
        rows={4}
        maxLength={250}
        placeholder="Enter post description. maxLength is 250"
        value={newPostDescription}
        onChange={(e) => setNewPostDescription(e.target.value)}
        className={classes.newPostDescription}
      />
      <br />
      <Input
        placeholder="Enter cover url"
        value={newPostUrl}
        onChange={(e) => setNewPostUrl(e.target.value)}
        className={classes.newPostUrl}
      />
      <br />
      <Select
        defaultValue={newPostUserID}
        options={options}
        onChange={(e) => setNewPostUserID(e)}
      />
    </AntModal>
  )
}
export default Modal
