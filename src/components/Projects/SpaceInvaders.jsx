import banner from "../../assets/project-images/space-invaders.png"

function SpaceInvaders() {
  return (
    <div className="project__container">
      <h2>Space Invaders</h2>
      <img className="project__banner" src={banner} alt="" />
      <p className="project__description">
        A college assignment that I had too much fun building. It has some
        crazy unbeatable level. Behind this game, there exist advance maths
        such as linear algebra (for separation axis theorem in collision
        detection) and trignometry for the ellipse conveyer belt movement
        of the aliens.
      </p>
      <ul>
        <li>
          <a href="https://github.com/B33th0v3n960/space-invaders" target="_blank">
            <icon></icon>repo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SpaceInvaders
