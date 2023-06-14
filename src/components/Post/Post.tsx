import React from 'react';
import style from './post.module.css'
import { IPost } from '../../types/types';
import { MyButton } from '../UI/MyButton/Mybutton';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  post: IPost
  remove: (post: IPost) => void
}

export function Post({ post, remove }: PostProps) {
  const router = useNavigate()
  return (
    <div onClick={() => router(`${post.id}`)} className={style.post}>
      <div className={style.content}>
        <h2 className={style.title}>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <MyButton onClick={(e) => { e.stopPropagation(); remove(post) }} >Удалить</MyButton>
    </div>
  )
} 