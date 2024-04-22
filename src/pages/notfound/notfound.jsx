import { useContext, useEffect } from 'react'
import { layoutContext } from '../../core/context/layoutProvider'

function NotFound() {
  const { setHero } = useContext(layoutContext)
  useEffect(() => {
    // setNav('Not Found')
    setHero({
      title: '404',
      // subtitle: 'Page not found',
      image: 'https://placehold.co/600x400/orange/white?text=Page+not+found',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="not-found">
      <h1 className="t-center">404</h1>
      <p className="t-center">Page not found</p>
    </div>
  )
}

export default NotFound
