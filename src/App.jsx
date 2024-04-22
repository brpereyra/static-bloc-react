import './App.scss'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import { PostsProvider } from './core/context/postProvider'
import { layoutContext } from './core/context/layoutProvider'
import { useContext } from 'react'
import MainRouter from './router/mainRouter'
import Footer from './components/footer/footer'

function App() {
  const { nav, hero } = useContext(layoutContext)
  return (
    <>
      <Header nav={nav}></Header>
      <Hero hero={hero}></Hero>
      <PostsProvider>
        <div className="content">
          <MainRouter></MainRouter>
        </div>
      </PostsProvider>
      <Footer></Footer>
    </>
  )
}

export default App
