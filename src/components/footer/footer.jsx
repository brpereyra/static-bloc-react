import './footer.scss'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer p-3">
      <p className="t-center m-0">
        <a
          className="footer-link"
          href="https://github.com/brpereyra"
          target="_blank"
        >
          Bryan Pereyra © {year}
        </a>{' '}
      </p>
    </footer>
  )
}

export default Footer
