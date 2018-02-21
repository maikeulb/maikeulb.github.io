const pages = [
	'main',
	'mono',
	'flask',
	'nodejs',
	'dotnet',
	'spa'
];

const openPage = (target) => {
	pages.map(page => {
		if(page === target){
			document.querySelector(`#${page}`).style.display = "block";
		}else{
			document.querySelector(`#${page}`).style.display = "none";
		}
	})

	document.documentElement.scrollTop = 0;
}

window.addEventListener("hashchange", () => {
	openPage(location.hash.replace("#", ""));
});

if(location.hash === "") location.hash = "#main";
openPage(location.hash.replace("#", ""));

fetch("dotnet.json").then((response) => {
	response.json().then(data => {
		data.projects.map(project => {

			let github = "";

			if(project.github) github = `
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

			document.querySelector(".dotnet-list").innerHTML += card;
		})
	})
})

fetch("mono.json").then((response) => {
	response.json().then(data => {
		data.projects.map(project => {

			let github = "";

			if(project.github) github = `
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

			document.querySelector(".mono-list").innerHTML += card;
		})
	})
})

fetch("flask.json").then((response) => {
	response.json().then(data => {
		data.projects.map(project => {

			let github = "";

			if(project.github) github = `
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

fetch("nodejs.json").then((response) => {
	response.json().then(data => {
		data.projects.map(project => {

			let github = "";

			if(project.github) github = `
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

			document.querySelector(".nodejs-list").innerHTML += card;
		})
	})
})

fetch("spa.json").then((response) => {
	response.json().then(data => {
		data.projects.map(project => {

			let github = "";

			if(project.github) github = `
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
