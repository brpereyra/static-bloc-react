import './hero.scss'

function Hero({ hero }) {
  const heroImage = hero.image

  const backGroundStyle = {
    backgroundImage: `url("${heroImage}")`,
    height: '80vh',
  }
  return (
    <>
      <header className="hero" style={backGroundStyle}>
        <h1 className="hero__title">{hero.title}</h1>
      </header>
    </>
  )
}

export default Hero
