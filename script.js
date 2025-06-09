document.addEventListener("DOMContentLoaded", function () {
  // Array de fotos atualizado com as novas imagens.
  const imagens = [
    "https://i.imgur.com/TshYE70.jpeg",
    "https://i.imgur.com/7RTi0NI.jpeg",
    "https://i.imgur.com/qjicO3O.jpeg",
    "https://i.imgur.com/GDcHdSp.jpeg",
    "https://i.imgur.com/JjRMfKu.jpeg",
    "https://i.imgur.com/tYYx5cN.jpeg"
  ];

  const scroller = document.getElementById("image-scroller");
  
  // Cria o container interno que será animado
  const scrollerInner = document.createElement('div');
  scrollerInner.classList.add('scroller-inner');

  // Adiciona as imagens ao container
  imagens.forEach(link => {
    const img = document.createElement('img');
    img.src = link;
    scrollerInner.appendChild(img);
  });

  // DUPLICA as imagens para criar o efeito de loop infinito
  imagens.forEach(link => {
    const img = document.createElement('img');
    img.src = link;
    scrollerInner.appendChild(img);
  });

  // Adiciona o container com as imagens na página
  scroller.appendChild(scrollerInner);


  // Emojis caindo (código inalterado)
  const emojis = ["❤️", "🥰", "💌"];
  function criarEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 6000);
  }

  setInterval(criarEmoji, 500);
});