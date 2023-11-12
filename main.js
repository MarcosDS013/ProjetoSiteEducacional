// navbar scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// faq expandable
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) =>
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "bx bx-plus-circle") {
      icon.className = "bx bx-minus-circle";
    } else {
      icon.className = "bx bx-plus-circle";
    }
  })
);

/*==================== ROLAGEM DA PÁGINA ============================*/

// Espera até que o documento esteja completamente carregado
$(document).ready(function () {
  // Animação suave de rolagem quando o ícone de seta para cima for clicado
  $(".footer-iconTop a").click(function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Animação de rolagem suave
    $("html, body").animate(
      {
        scrollTop: 0, // Rola para o topo da página
      },
      1000 // Duração da animação em milissegundos (neste exemplo, 1 segundo)
    );
  });
});

const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);
