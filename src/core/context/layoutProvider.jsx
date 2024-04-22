import { createContext, useState } from 'react'
/**
 * @typedef {{
 * title: string,
 * image: string
 * }} Hero
 * @typedef {{
 * title: string
 * }} Nav
 
  * @typedef {{
  * nav: Nav,
  * hero: Hero,
  * setNav: (title: string) => void,
  * setHero: (hero: Hero) => void
  * }} LayoutContext
  
  * @type {React.Context<LayoutContext>}

 */
// eslint-disable-next-line react-refresh/only-export-components
export const layoutContext = createContext({
  nav: {
    title: 'Header',
  },
  hero: {
    title: 'Hero',
    image: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
  },
  setNav: () => {},
  setHero: () => {},
})

export function LayoutProvider({ children }) {
  const [layoutData, setLayoutData] = useState({
    nav: {
      title: 'Header',
    },
    hero: {
      title: 'Hero',
      image: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
    },
  })

  const setNav = (title) => {
    const newState = {
      ...layoutData,
      nav: {
        title,
      },
    }
    setLayoutData(newState)
  }
  const setHero = ({ title, image }) => {
    console.log(title, image)
    setLayoutData({
      ...layoutData,
      hero: {
        title: title ? title : layoutData.hero.title,
        image: image ? image : layoutData.hero.image,
      },
    })
    console.log(layoutData)
  }

  const daata = {
    ...layoutData,
    setNav,
    setHero,
  }
  return (
    <layoutContext.Provider value={daata}>{children}</layoutContext.Provider>
  )
}
