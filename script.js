let chart;
const mtk = avg(".mtk");

function tampilkanGrafik(){
  const inputs = document.querySelectorAll(".nilai");
  let total = 0;

  inputs.forEach(i => total += Number(i.value));
  let rata = total / inputs.length;

  if(chart){
    chart.destroy();
  }

  chart = new Chart(document.getElementById('chartNilai'), {
    type: 'bar',
    data: {
      labels: ['Rata-rata Nilai'],
      datasets: [{
        data: [rata]
      }]
    },
    options: {
      responsive:true,
      plugins:{legend:{display:false}}
    }
  });
}

function bukaPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
}

function cekHasil(){
  let inputs = document.querySelectorAll(".nilai");
  let total = 0;

  inputs.forEach(i => total += Number(i.value));

  let rata = total / inputs.length;

  let hasilText = document.getElementById("hasilText");

  if(rata >= 90){
    hasilText.innerHTML = "✅ LAYAK MENDAFTAR<br>Rata-rata: " + rata.toFixed(2);
    hasilText.className = "layak";
  } else {
    hasilText.innerHTML = "❌ BELUM LAYAK<br>Rata-rata: " + rata.toFixed(2);
    hasilText.className = "tidak";
  }

  tampilkanGrafik(); // 🔥 panggil grafik
}







