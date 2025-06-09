document.addEventListener("DOMContentLoaded", function () {
  // --- LÓGICA DA FAIXA DE IMAGENS (INALTERADA) ---
  const imagens = [
    "https://i.imgur.com/TshYE70.jpeg",
    "https://i.imgur.com/7RTi0NI.jpeg",
    "https://i.imgur.com/qjicO3O.jpeg",
    "https://i.imgur.com/GDcHdSp.jpeg",
    "https://i.imgur.com/JjRMfKu.jpeg",
    "https://i.imgur.com/tYYx5cN.jpeg"
  ];

  const scroller = document.getElementById("image-scroller");
  
  const scrollerInner = document.createElement('div');
  scrollerInner.classList.add('scroller-inner');

  imagens.forEach(link => {
    const img = document.createElement('img');
    img.src = link;
    scrollerInner.appendChild(img);
  });

  imagens.forEach(link => {
    const img = document.createElement('img');
    img.src = link;
    scrollerInner.appendChild(img);
  });

  scroller.appendChild(scrollerInner);

  // --- NOVA LÓGICA DO CONTADOR DE DIAS ---
  const dataInicio = new Date('2025-02-27T00:00:00');
  const hoje = new Date();
  
  // Apenas calcula se a data de hoje for posterior à data de início
  if (hoje >= dataInicio) {
    const diferencaTempo = hoje.getTime() - dataInicio.getTime();
    const diferencaDias = Math.floor(diferencaTempo / (1000 * 3600 * 24));
    
    const elementoContador = document.getElementById('contador');
    
    // Altera a frase dependendo se for 1 dia ou mais
    if (diferencaDias === 1) {
      elementoContador.innerText = `Fiz a melhor escolha da minha vida há 1 dia.`;
    } else {
      elementoContador.innerText = `Fiz a melhor escolha da minha vida há ${diferencaDias} dias.`;
    }
  }
});