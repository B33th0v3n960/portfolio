import profile from '../assets/panda.png'
import '../css/App.css'
import '../css/About.css'

function About() {
  return (
    <>
      <section id="about">
        <img src={profile} className="about__profile" alt="" />
        <div className="about__introduction">
          <h1>Computer Science Student</h1>
          <p>
            I am a computer science student in Trinity College Dublin. I am
            searching for internships opportunities to expand my understanding
            of software development. Here are some my personal projects.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
