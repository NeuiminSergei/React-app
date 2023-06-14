import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { Loader } from '../../components/UI/Loader/Loader';
import style from './postPage.module.css'
import { IPostComments } from '../../types/types';

export function PostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>({})
  const [comments, setComments] = useState<IPostComments[]>([])
  const [fetchPostById, isLoading, error] = useFetching(async (id: any) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, ComError] = useFetching(async (id: any) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      {isLoading
        ? <Loader />
        : <div className={style.post}>
          <h2 className={style.post_title}>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      }
      {isComLoading
        ? <Loader />
        : <div>
          <h3 className={style.comments_title}>Комментарии:</h3>
          <div className={style.comments}>
            {comments.map(comm =>
              <div className={style.comment} key={comm.id}>
                <h4 className={style.comment_author}>{comm.email}</h4>
                <div>{comm.body}</div>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}