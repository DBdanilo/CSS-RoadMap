const section = document.getElementById("projects")

let projects = [
  { id: 1, tag: "Easy", title: "Transparent Login Form", img: "tlf" },
  { id: 1, tag: "", title: "", img: "" },
]

projects.map((project) => {
  section.innerHTML += `
    <article>
    <div class='tag'>${project.tag}</div>

    <div class='title'>
      <a href="/CSS-RoadMap/${project.title}">${project.title}</a>
    </div>

    <figure>
      <img src='img/${project.img}.png' alt = ${project.title}>
    </figure>

    <a href="https://github.com/Roopaish/CSS-RoadMap/tree/master/${project.title}" target='_blank' class='code-link'>
      View Project Code →
    </a>

  </article>
`
})
