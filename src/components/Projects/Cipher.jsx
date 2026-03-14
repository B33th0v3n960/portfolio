import banner from "../../assets/project-images/cipher.png"

function Cipher() {
  return (
    <div className="project__container">
      <h2>Cipher</h2>
      <img className="project__banner" src={banner} alt="" />
      <p className="project__description">
        This is just personal hobby project to test and learn out encryption,
        decryption and hacking. This cipher is written in c language.
        I plan to include additional methods of encryption methods in the future
        such as the exponetial and RSA encryption.
      </p>
      <ul>
        <li>

          <a href="https://github.com/B33th0v3n960/ciphers" target="_blank">
            <icon></icon>repo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Cipher
