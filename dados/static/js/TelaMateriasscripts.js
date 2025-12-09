// Seleciona a imagem e o menu
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Adiciona evento de clique na imagem
menuIcon.addEventListener('click', function() {
    // Alterna entre mostrar ou esconder o menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }

});



document.addEventListener("DOMContentLoaded", function () {
  const materias = document.querySelectorAll(".container_Materias");
  const infosAdicionais = document.querySelectorAll(".detalhes-materia");

  materias.forEach((materia, index) => {
    materia.addEventListener("click", () => {
      // Oculta todos os containers de matéria
      materias.forEach(m => m.style.display = "none");

      // Exibe apenas o container clicado
      materia.style.display = "flex";

      // Oculta todos os blocos de informações adicionais
      infosAdicionais.forEach(info => info.style.display = "none");

      // Preenche e exibe o container de informações adicionais correspondente
      const info = infosAdicionais[index];
      info.innerHTML = `
        <div class="detalhes-materia">

          <section> 
            <button class="button_navegacao">
              <h3> Avisos </h3>
            </button>
            <button class="button_navegacao">
                <h3> Atividades </h3>
            </button>
            <button class="button_navegacao">
                <h3> Materiais </h3>
            </button>
            <button class="button_navegacao">
                <h3> Ementa </h3>
            </button>
          </section>
          

          <ul>
            <li class="container_informativos" ><strong>Mudança de Sala - Aula 22/04</strong>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas tellus lacus, porttitor a feugiat tempor, pretium sed ligula. </p>
              <p> (21/04/2025 às 14:00) </p>

            </li>
            <li class="container_informativos" ><strong>Material Complementar</strong>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas tellus lacus, porttitor a feugiat tempor, pretium sed ligula. </p>
              <p> (21/04/2025 às 14:00) </p>
              <a href="#">Acessar Material</a>
            </li>
            <li class="container_informativos" ><strong>Data de Avaliação</strong> 
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas tellus lacus, porttitor a feugiat tempor, pretium sed ligula. </p>
              <p> (21/04/2025 às 14:00) </p>
            </li>
          </ul>
        </div>
      `;
      info.style.display = "block";
    });
  });
});

