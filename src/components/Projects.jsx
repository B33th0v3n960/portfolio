import '../css/App.css'
import '../css/Projects.css'
import Cipher from './Projects/Cipher'
import Dashboard from './Projects/Dashboard'
import SpaceInvaders from './Projects/SpaceInvaders'

function Projects() {
  return (
    <>
      <section id="projects">
        <Cipher />
        <SpaceInvaders />
        <Dashboard />
      </section >
    </>
  )
}

export default Projects
