# v-comment

```
npm i v-comment -save
```

### usage

```html
<v-comment 
  :list="list<CommentProps>"
  @login="handleLogin"
  @submit="handleSubmit"
/>

<script>
const handleSubmit = (input, inputCompiler) {
  // ...
}
</script>

<style lang="less">
@border-color: #eee;
@bg-color: #f2f2f2;
@main-color: #4e9afa;
@import '~v-comment/src/style/index.less';
</style>
```

类型声明

```typescript
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
```

### build component

```
npm run build
```
