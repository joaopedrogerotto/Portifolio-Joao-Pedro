fetch("./projects.json")
    .then(response => response.json())
    .then(projects => {

        const listaProjetos = document.getElementById("lista-projetos");

        projects.forEach(project => {

            const tecnologias = project.tecnologia
                .map(t => `<span>${t}</span>`)
                .join("");

            listaProjetos.insertAdjacentHTML("beforeend", `
                <div class="card-projeto">
                    <h3>${project.nome}</h3>

                    <div class="tecnologias">
                        ${tecnologias}
                    </div>

                    <a href="${project.github}" target="_blank" title="Ver no GitHub">
                        <i class="devicon-github-original"></i>
                    </a>
                </div>
            `);

        });

    });