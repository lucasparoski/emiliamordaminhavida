document.addEventListener("DOMContentLoaded", function () {
  // --- LÓGICA DA FAIXA DE IMAGENS ---
  const imagens = [
    "https://i.imgur.com/TshYE70.jpeg",
    "https://i.imgur.com/7RTi0NI.jpeg",
    "https://i.imgur.com/qjicO3O.jpeg",
    "https://i.imgur.com/GDcHdSp.jpeg",
    "https://i.imgur.com/JjRMfKu.jpeg",
    "https://i.imgur.com/tYYx5cN.jpeg"
  ];
  const scroller = document.getElementById("image-scroller");
  if (scroller) {
    const scrollerInner = document.createElement('div');
    scrollerInner.classList.add('scroller-inner');
    imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
    imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
    scroller.appendChild(scrollerInner);
  }

  // --- LÓGICA DO CONTADOR ---
  const dataInicio = new Date('2025-02-27T00:00:00');
  const hoje = new Date();
  if (hoje >= dataInicio) {
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();
    if (dias < 0) {
      meses--;
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
    if (meses < 0) {
      anos--;
      meses += 12;
    }
    document.getElementById('anos').innerText = anos;
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
  }
  
  // --- CÓDIGO DOS EMOJIS CAINDO ---
  const emojis = ["❤️", "🥰", "💌"];
  function criarEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    
    // A LINHA DA DURAÇÃO DA ANIMAÇÃO FOI REMOVIDA DAQUI
    
    document.body.appendChild(emoji);

    // Remove o emoji da página depois que ele terminar de cair
    setTimeout(() => {
      emoji.remove();
    }, 6000); // Duração fixa para combinar com o CSS
  }

  // Cria um novo emoji a cada 500ms
  setInterval(criarEmoji, 500);
});