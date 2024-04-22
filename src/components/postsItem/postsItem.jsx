import { formatDate } from 'date-fns/format'
import './postsItem.scss'

function PostsItem({ post }) {
  const date = new Date()
  const dateFormat = formatDate(date, 'dd/MM/yyyy')
  return (
    <div className="posts-card">
      <div className="posts-card__item">
        {/* Title */}
        <h2 className="posts-card__item-title">{post.title}</h2>
        {/* description */}
        <p className="posts-card__item-description">{post.body}</p>
        {/* Date */}
        <p className="posts-card__item-date">{dateFormat}</p>
      </div>
    </div>
  )
}

export default PostsItem
