import { useContext, useEffect } from 'react'
import { PostsContext } from '../../core/context/postProvider'
import './postsList.scss'
import PostsItem from '../../components/postsItem/postsItem'
import { layoutContext } from '../../core/context/layoutProvider'

function PostsList() {
  const { posts, getListPosts } = useContext(PostsContext)
  const { setNav } = useContext(layoutContext)

  useEffect(() => {
    setNav('Posts List')
    getListPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="content">
      <div className="posts-list">
        <h1 className="px-3">Reciente</h1>
        <div>
          {posts.map((post) => (
            <PostsItem key={post.id} post={post}></PostsItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostsList
