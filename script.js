const projetos = [
  {
    titulo: "Planilha de Controle de Aluguéis",
    descricao: "Modelo completo para gerenciar todos os aluguéis do ano, incluindo pagamentos, inadimplência e totais mensais.",
    tecnologias: ["file-excel"],
    link: "#"
  },
  {
    titulo: "Sistema de Cadastro de Terrenos",
    descricao: "Aplicação simples em HTML, CSS e JavaScript para registrar terrenos, valores e status de venda.",
    tecnologias: ["html5", "css3-alt", "js"],
    link: "#"
  },
  {
    titulo: "Portfólio Profissional",
    descricao: "Meu portfólio profissional desenvolvido como MVP da disciplina, utilizando HTML5, CSS3 e JavaScript.",
    tecnologias: ["html5", "css3-alt", "js"],
    link: "#"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  const techIcons = p.tecnologias
    .map(t => `<i class="fab fa-${t}"></i>`)
    .join(" ");

  div.innerHTML = `
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <div>${techIcons}</div>
    <a href="${p.link}" target="_blank" class="btn-primary" style="margin-top:15px;">Ver Projeto</a>
  `;

  lista.appendChild(div);
});
