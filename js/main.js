const pages = [
  'main',
  'core',
  'suave',
  'flask',
  'spa'
];

const openPage = (target) => {
  pages.map(page => {
    if (page === target) {
      document.querySelector(`#${page}`).style.display = "block";
    } else {
      document.querySelector(`#${page}`).style.display = "none";
    }
  })

  document.documentElement.scrollTop = 0;
}

window.addEventListener("hashchange", () => {
  openPage(location.hash.replace("#", ""));
});

if (location.hash === "") location.hash = "#main";
openPage(location.hash.replace("#", ""));

fetch("core.json").then((response) => {
  response.json().then(data => {
    data.projects.map(project => {

      let github = "";

      if (project.github) github = `
			<a href="${project.github}" target="_blank">
		        <button class="btn">Github link</button>
		    </a>`;

      let card = `
			<div class="card">
			    <div class="card-title">${project.name}</div>
			    <p><strong>${project.technologies}</strong></p>
			    <p>${project.description}</p>
			    <a href="${project.link}" target="_blank">
			        <button class="btn">${project.linkType}</button>
			    </a>
			    ${github}
			</div>`;

      document.querySelector(".core-list").innerHTML += card;
    })
  })
})

fetch("suave.json").then((response) => {
  response.json().then(data => {
    data.projects.map(project => {

      let github = "";

      if (project.github) github = `
			<a href="${project.github}" target="_blank">
		        <button class="btn">Github link</button>
		    </a>`;

      let card = `
			<div class="card">
			    <div class="card-title">${project.name}</div>
			    <p><strong>${project.technologies}</strong></p>
			    <p>${project.description}</p>
			    <a href="${project.link}" target="_blank">
			        <button class="btn">${project.linkType}</button>
			    </a>
			    ${github}
			</div>`;

      document.querySelector(".suave-list").innerHTML += card;
    })
  })
})

fetch("flask.json").then((response) => {
  response.json().then(data => {
    data.projects.map(project => {

      let github = "";

      if (project.github) github = `
			<a href="${project.github}" target="_blank">
		        <button class="btn">Github link</button>
		    </a>`;

      let card = `
			<div class="card">
			    <div class="card-title">${project.name}</div>
			    <p><strong>${project.technologies}</strong></p>
			    <p>${project.description}</p>
			    <a href="${project.link}" target="_blank">
			        <button class="btn">${project.linkType}</button>
			    </a>
			    ${github}
			</div>`;

      document.querySelector(".flask-list").innerHTML += card;
    })
  })
})

fetch("spa.json").then((response) => {
  response.json().then(data => {
    data.projects.map(project => {

      let github = "";

      if (project.github) github = `
			<a href="${project.github}" target="_blank">
		        <button class="btn">Github link</button>
		    </a>`;

      let card = `
			<div class="card">
			    <div class="card-title">${project.name}</div>
			    <p><strong>${project.technologies}</strong></p>
			    <p>${project.description}</p>
			    <a href="${project.link}" target="_blank">
			        <button class="btn">${project.linkType}</button>
			    </a>
			    ${github}
			</div>`;

      document.querySelector(".spa-list").innerHTML += card;
    })
  })
})
