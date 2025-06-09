document.addEventListener("DOMContentLoaded", function () {
  // --- LÓGICA DA FAIXA DE IMAGENS ---
  const imagens = ["https://i.imgur.com/TshYE70.jpeg","https://i.imgur.com/7RTi0NI.jpeg","https://i.imgur.com/qjicO3O.jpeg","https://i.imgur.com/GDcHdSp.jpeg","https://i.imgur.com/JjRMfKu.jpeg","https://i.imgur.com/tYYx5cN.jpeg"];
  const scroller = document.getElementById("image-scroller");
  if(scroller){const scrollerInner=document.createElement('div');scrollerInner.classList.add('scroller-inner');imagens.forEach(link=>{const img=document.createElement('img');img.src=link;scrollerInner.appendChild(img);});imagens.forEach(link=>{const img=document.createElement('img');img.src=link;scrollerInner.appendChild(img);});scroller.appendChild(scrollerInner);}

  // --- LÓGICA DO CONTADOR ---
  const dataInicio=new Date('2025-02-27T00:00:00');const hoje=new Date();if(hoje>=dataInicio){let anos=hoje.getFullYear()-dataInicio.getFullYear();let meses=hoje.getMonth()-dataInicio.getMonth();let dias=hoje.getDate()-dataInicio.getDate();if(dias<0){meses--;dias+=new Date(hoje.getFullYear(),hoje.getMonth(),0).getDate();}if(meses<0){anos--;meses+=12;}document.getElementById('anos').innerText=anos;document.getElementById('meses').innerText=meses;document.getElementById('dias').innerText=dias;}
  
  // --- CÓDIGO DOS EMOJIS CAINDO ---
  const emojis=["❤️","🥰","💌"];function criarEmoji(){const emoji=document.createElement("div");emoji.classList.add("emoji");emoji.innerText=emojis[Math.floor(Math.random()*emojis.length)];emoji.style.left=Math.random()*100+"vw";document.body.appendChild(emoji);setTimeout(()=>{emoji.remove();},6000);}setInterval(criarEmoji,500);

  // --- LÓGICA DA CAIXINHA DE CARINHO (ATUALIZADA) ---
  const frasesDeCarinho = [
    // Frases antigas
    "voce tem os zoios mais lindos do mundo",
    "voce tem o sorriso mais lindo que eu já vi",
    "eu amo quando eu faço paiacice e vejo voce mostrando esse sorriso lindo",
    "amo o seu jeitinho lindo",
    "amo voce por inteiro",
    "amo seu corpinho gostoso",
    "amo quando voce me olha com os olhinhos brilhando e com uma carinha boba",
    "te amo muito",
    "voce é a dona do meu coração",
    "voce é o amor da minha vida",
    // Novas frases adicionadas
    "obrigado por cuidar tanto de mim",
    "amo voce ué",
    "amo ir na sua casa e ficar o dia inteiro sem fazer nada com voce",
    "amo VOCE, só VOCE, unicamente VOCE",
    "voce é tao perfeita",
    "voce parece um sonho",
    "voce é mais gostosa que pizza"
  ];

  const caixinhaBtn = document.getElementById('caixinha-btn');
  const mensagemContainer = document.getElementById('mensagem-container');
  const mensagemTexto = document.getElementById('mensagem-texto');
  let timeoutId;
  let ultimoIndice = -1; // Variável para guardar o índice da última frase mostrada

  caixinhaBtn.addEventListener('click', function() {
    let novoIndice;
    
    // MELHORIA: Garante que o novo índice seja diferente do último
    do {
      novoIndice = Math.floor(Math.random() * frasesDeCarinho.length);
    } while (frasesDeCarinho.length > 1 && novoIndice === ultimoIndice);

    ultimoIndice = novoIndice; // Atualiza o último índice
    const fraseAleatoria = frasesDeCarinho[novoIndice];
    
    // Define o texto e mostra o container
    mensagemTexto.innerText = fraseAleatoria;
    mensagemContainer.classList.add('visivel');

    // Limpa o timer anterior se houver um
    clearTimeout(timeoutId);

    // Esconde a mensagem depois de 4 segundos
    timeoutId = setTimeout(() => {
      mensagemContainer.classList.remove('visivel');
    }, 4000);
  });
});