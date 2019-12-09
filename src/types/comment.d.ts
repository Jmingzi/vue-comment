type User = {
  id: string
  name: string
  avatar: string
}

export type CommentListItem = {
  id: string
  user: User
  createdTimeStamp: number
  input: string
  inputCompiler: string
}

export type CommentList = Array<CommentListItem>

export type CommentProps = {
  user?: User
  nums: number
  list: CommentList
}

declare module 'v-comment' {
  export default function (props: CommentProps): JSX.Element
}
