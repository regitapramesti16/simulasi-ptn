function cekKelayakan(){
  let inputs = document.querySelectorAll(".nilai");
  let total = 0;

  inputs.forEach(i => total += Number(i.value));

  let rata = total / inputs.length;
  document.getElementById("rataNilai").innerText = rata.toFixed(2);

  let status = document.getElementById("statusText");
  let popupText = document.getElementById("popupText");

  if(rata >= 90){
    status.innerText = "LAYAK MENDAFTAR";
    status.className = "layak";
    popupText.innerText = "🎉 Selamat! Anda layak mendaftar.";
  } else {
    status.innerText = "BELUM LAYAK";
    status.className = "tidak";
    popupText.innerText = "Maaf, Anda belum memenuhi standar.";
  }

  document.getElementById("hasilBox").classList.remove("hidden");
  document.getElementById("popup").classList.remove("hidden");

  tampilkanGrafik();
}

function tutupPopup(){
  document.getElementById("popup").classList.add("hidden");
}

function tampilkanGrafik(){
  const mtk = avg(".mtk");
  const ipa = avg(".ipa");
  const eng = avg(".eng");

  new Chart(document.getElementById('chartNilai'), {
    type: 'bar',
    data: {
      labels: ['Matematika','IPA','Bahasa Inggris'],
      datasets: [{
        label: 'Rata-rata',
        data: [mtk, ipa, eng]
      }]
    },
    options: {
      responsive:true,
      plugins:{legend:{display:false}}
    }
  });
}

function avg(selector){
  let els = document.querySelectorAll(selector);
  let total = 0;
  els.forEach(e => total += Number(e.value));
  return (total/els.length).toFixed(1);
}
