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
  if (scroller) {
    const scrollerInner = document.createElement('div');
    scrollerInner.classList.add('scroller-inner');
    imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
    imagens.forEach(link => { const img = document.createElement('img'); img.src = link; scrollerInner.appendChild(img); });
    scroller.appendChild(scrollerInner);
  }

  // --- NOVA LÓGICA CORRIGIDA DO CONTADOR (Anos, Meses, Dias) ---
  const dataInicio = new Date('2025-02-27T00:00:00');
  const hoje = new Date();

  // Apenas calcula se a data de hoje for posterior à data de início
  if (hoje >= dataInicio) {
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    // Ajusta os valores se meses ou dias forem negativos ("empresta" do maior)
    if (dias < 0) {
      meses--;
      // Pega o número de dias do último dia do mês anterior
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
    if (meses < 0) {
      anos--;
      meses += 12;
    }

    // Atualiza os elementos na página com os valores corretos
    document.getElementById('anos').innerText = anos;
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
  }
});