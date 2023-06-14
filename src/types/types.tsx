export interface IPost {
  id: number
  title: string
  body: string
  localeCompare?: any
}

export interface IPostComments {
  postId:number
  id: number
  name: string
  email: string
  body: string
}