import React, { useState } from 'react';
import { IPost } from "../../types/types";
import { MyTextarea } from "../UI/MyTextarea/MyTextarea";
import { MyButton } from "../UI/MyButton/Mybutton";
import style from './postForm.module.css'

interface IPostFormProps {
  create: (create: IPost) => void
}

export function PostForm({ create }: IPostFormProps) {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e: React.MouseEvent) => {
    e.preventDefault()
    const newPost = { ...post, id: Date.now() }
    create(newPost)
    setPost({ title: '', body: '' })
  }
  return (
    <form className={style.post_form}>
      <MyTextarea
        value={post.title}
        placeholder='Название поста'
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyTextarea
        value={post.body}
        placeholder='Описание поста'
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}