import banner from "../../assets/project-images/dashboard.png"

function Dashboard() {
  return (
    <div className="project__container">
      <h2>Courier Dashboard</h2>
      <img className="project__banner" src={banner} alt="" />
      <p className="project__description">
        This was a website I built during my 2 week of work experience during
        Transition Year. It has responsive design, graphes and table rendered
        base on data (I wasn't given real data, thus the data are randomly
        generated). Sorting and toggle reverse sort are avaible on the table.
        Again this is an old project. Don't expect much 😅.
      </p>
      <ul>
        <li>
          <a href="https://github.com/B33th0v3n960/dashboard" target="_blank">
            <icon></icon>repo
          </a>
        </li>
        <li>
          <a href="https://dashboard.b33th0v3n.com/" target="_blank">
            <icon>󰖟</icon>website
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard
