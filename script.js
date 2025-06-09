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
  imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
  imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
  scroller.appendChild(scrollerInner);

  // --- NOVA LÓGICA DO CONTADOR DETALHADO E EM TEMPO REAL ---
  const dataInicio = new Date('2025-02-27T00:00:00');

  function atualizarContador() {
    const agora = new Date();

    if (agora < dataInicio) {
      // Se a data ainda não chegou, não faz nada ou mostra uma mensagem
      return;
    }

    let tempDate = new Date(dataInicio);

    let anos = agora.getFullYear() - tempDate.getFullYear();
    tempDate.setFullYear(tempDate.getFullYear() + anos);
    if (tempDate > agora) {
      anos--;
      tempDate.setFullYear(tempDate.getFullYear() - 1);
    }

    let meses = agora.getMonth() - tempDate.getMonth() + (12 * (agora.getFullYear() - tempDate.getFullYear()));
    tempDate.setMonth(tempDate.getMonth() + meses);
     if (tempDate > agora) {
      meses--;
      tempDate.setMonth(tempDate.getMonth() - 1);
    }
    
    const umDia = 1000 * 60 * 60 * 24;
    let dias = Math.floor((agora - tempDate) / umDia);

    let diffRestante = (agora - tempDate) % umDia;

    let horas = Math.floor(diffRestante / (1000 * 60 * 60));
    diffRestante %= (1000 * 60 * 60);

    let minutos = Math.floor(diffRestante / (1000 * 60));
    diffRestante %= (1000 * 60);

    let segundos = Math.floor(diffRestante / 1000);

    // Adiciona um zero à esquerda se o número for menor que 10
    const pad = (num) => num.toString().padStart(2, '0');

    document.getElementById('anos').innerText = anos;
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = pad(horas);
    document.getElementById('minutos').innerText = pad(minutos);
    document.getElementById('segundos').innerText = pad(segundos);
  }

  // Atualiza o contador a cada segundo
  setInterval(atualizarContador, 1000);
  
  // Roda a função uma vez imediatamente para não esperar 1s para aparecer
  atualizarContador();
});