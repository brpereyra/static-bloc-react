import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import PostsList from './pages/postsList/postsList'
import { PostsProvider } from './core/context/postProvider'
import { layoutContext } from './core/context/layoutProvider'
import { useContext } from 'react'

function App() {
  const { nav, hero } = useContext(layoutContext)
  return (
    <>
      <Header nav={nav}></Header>
      <Hero title={hero}></Hero>
      <PostsProvider>
        <PostsList />
      </PostsProvider>
    </>
  )
}

export default App
