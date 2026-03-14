import cv from '../assets/zhou-sun-cv.pdf'
import '../css/App.css'
import '../css/Footer.css'

function Footer() {
  return (
    <>
      <section id="footer">
        <div id="docs">
          <icon>󰈙</icon>
          <h2>Curriculum Vitae</h2>
          <ul>
            <li>
              <a href={cv} download="zhou-sun-cv.pdf" target="_blank">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        <div id="contacts">
          <icon> </icon>
          <h2>Connect with me</h2>
          <p>Here are my socials</p>
          <ul>
            <li>
              <a href="https://github.com/B33th0v3n960" target="_blank">
                <icon></icon>
                GitHub
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/zhou-sun-8069281a7/" target="_blank">
                <icon></icon>
                Linkedin
              </a>
            </li>

            <li>
              <a href="mailto:zhousun06@gmail.com">
                <icon>󱡯</icon>
                Gmail
              </a>
            </li>
          </ul>
        </div>

      </section >
    </>
  )
}

export default Footer

