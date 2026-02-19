let chart;

function tampilkanGrafik(rata){

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
      plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true, max:100}}
    }
  });
}

function bukaPopup() {
  document.getElementById("modalCek").classList.remove("hidden");
}

function tutupPopup() {
  document.getElementById("modalCek").classList.add("hidden");
}

function bukaHasil(){
  document.getElementById("popupHasil").classList.remove("hidden");
}

function tutupHasil(){
  document.getElementById("popupHasil").classList.add("hidden");
}

function cekHasil(){
  let inputs = document.querySelectorAll(".nilai");
  let total = 0;

  inputs.forEach(i => total += Number(i.value));

  let rata = total / inputs.length;

  let status = document.getElementById("hasilStatus");
  let rataText = document.getElementById("hasilRata");

  if(rata >= 90){
    status.innerHTML = "✅ LAYAK MENDAFTAR";
    status.className = "layak";
  } else {
    status.innerHTML = "❌ BELUM LAYAK";
    status.className = "tidak";
  }

  rataText.innerHTML = "Rata-rata: " + rata.toFixed(2);

  // tutup popup form
  tutupPopup();

  // tampilkan popup hasil
  bukaHasil();

  tampilkanGrafik(rata);
}












