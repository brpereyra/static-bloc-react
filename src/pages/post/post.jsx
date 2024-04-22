import './post.scss'

function Post() {
  return (
    <div className="content">
      <div className="post">
        <h1 className="px-3">Post</h1>
        <div>
          <div className="post-item">
            <div className="post-item__title">Title</div>
            <div className="post-item__content">Content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
