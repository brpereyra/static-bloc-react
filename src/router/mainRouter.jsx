import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsList from '../pages/postsList/postsList'
import NotFound from '../pages/notfound/notfound'
import Post from '../pages/post/post'

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Post list */}
        <Route path="/" element={<PostsList />} />

        {/* Post Detail */}
        <Route path="/post/:id" element={<Post />} />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
