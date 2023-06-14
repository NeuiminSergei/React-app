import { useMemo } from "react"
import { IPost } from "../types/types"

export const useSortedPost = (posts: IPost[], sort: string) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort as keyof IPost].localeCompare(b[sort as keyof IPost]))
    } return posts
  }, [sort, posts])
  return sortedPost
}

export const usePosts = (posts: IPost[], sort: string, query: string) => {
  const sortedPosts = useSortedPost(posts, sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])
  return sortedAndSearchedPosts
}