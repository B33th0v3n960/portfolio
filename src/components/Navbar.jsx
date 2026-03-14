import '../css/index.css'
import '../css/App.css'
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar__container">
        <h1 className="navbar__title">Zhou Sun</h1>
        <div className="navbar__links">
          <a className="navbar__link" href="#projects">Projects</a>
          <a className="navbar__link" href="#contacts">Contacts</a>
        </div>
      </div >
    </>
  )
}

export default Navbar
