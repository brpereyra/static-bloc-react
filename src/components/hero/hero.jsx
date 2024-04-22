import './hero.scss'

function Hero() {
  const heroImage =
    'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b'

  const backGroundStyle = {
    backgroundImage: `url("${heroImage}")`,
    height: '80vh',
  }
  return (
    <>
      <header className="hero" style={backGroundStyle}>
        <h1 className="hero__title">Hero</h1>
      </header>
    </>
  )
}

export default Hero
