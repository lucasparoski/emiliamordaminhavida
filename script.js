document.addEventListener("DOMContentLoaded", function () {
  // Array de fotos para o slideshow.
  const imagens = [
    "https://i.imgur.com/TshYE70.jpeg",
    "https://i.imgur.com/I8DkpOA.jpeg" // Este é o link direto para a imagem do seu álbum mais recente.
  ];
  let index = 0;

  const slideshow = document.getElementById("slideshow");

  function trocarImagem() {
    slideshow.style.backgroundImage = `url('${imagens[index]}')`;
    index = (index + 1) % imagens.length;
  }

  trocarImagem();
  setInterval(trocarImagem, 4000); // troca a cada 4 segundos

  // Emojis caindo
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