type User = {
  id: string
  name: string
  avatar: string
}

export type CommentListItem = {
  id: string
  user: User
  createdTimeStamp: number
  content: string
}

export type CommentList = Array<CommentListItem>

export type CommentProps = {
  user?: User
  nums: number
  list: CommentList
}

export type CommentSubmit = {
  content: string
  user: User
}
