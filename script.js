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
  console.log("fungsi berjalan"); // debug

  let inputs = document.querySelectorAll(".nilai");
  let total = 0;

  inputs.forEach(i => total += Number(i.value));

  let rata = total / inputs.length;

  console.log("rata:", rata);

  tutupPopup();
  bukaHasil();
}













