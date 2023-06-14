import { useState, useEffect } from 'react';
import { Post } from '../../components/Post/Post';
import { IPost } from '../../types/types';
import List from '../../components/List/List';
import { PostForm } from '../../components/PostForm/PostForm';
import { PostFilter } from '../../components/PostFilter/PostFilter';
import { Modal } from '../../components/UI/Modal/Modal';
import { MyButton } from '../../components/UI/MyButton/Mybutton';
import { usePosts } from '../../hooks/usePost';
import PostService from '../../API/PostService';
import { Loader } from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/pages';
import { Pagination } from '../../components/UI/Pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState<{ sort: string, query: string }>({ sort: '', query: '' })
  const [modal, setModal] = useState<boolean>(false)
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit: number, page: number) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount: number = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  const [totalPages, setTotalPages] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost: IPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page: number) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  const selectSort = (sort: string) => {
    setFilter({ ...filter, sort: (sort) })
  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  return (
    <div>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <div className='wrapper'>
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      </div>
      <PostFilter sort={selectSort} value={filter.query} onChange={(e) => { setFilter({ ...filter, query: e.target.value }) }} />
      {postError &&
        <h2>Произошла ошибка ${postError}</h2>
      }
      <List items={sortedAndSearchedPosts} renderItem={(post: IPost) => <Post post={post} remove={removePost} key={post.id}></Post>} />
      {isPostLoading &&
        <div className='loader_wrap'><Loader /></div>
      }
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div >
  );
}

export default Posts;