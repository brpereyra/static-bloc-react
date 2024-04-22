import './header.scss'

function Header({ nav }) {
  console.log({ nav })
  return (
    <nav className="header">
      <h2>{nav.title}</h2>
    </nav>
  )
}

export default Header
