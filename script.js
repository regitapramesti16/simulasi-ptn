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

function resetForm(){
  document.querySelectorAll(".nilai").forEach(input => {
    input.value = "";
  });
}

function cekHasil(){

  let inputs = document.querySelectorAll(".nilai");
  let total = 0;
  let filled = 0;

  inputs.forEach(i => {
    if(i.value !== ""){
      total += Number(i.value);
      filled++;
    }
  });

  let warning = document.getElementById("warningBox");
  if(filled === 0){
    warning.classList.remove("d-none");

    setTimeout(() => {
      warning.classList.add("d-none");
    }, 2500);

    return;
  }

  let rata = total / filled;

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

  tampilkanGrafik(rata);

  // tutup modal form
  let modalCek = bootstrap.Modal.getInstance(document.getElementById('modalCek'));
  modalCek.hide();

  // buka modal hasil
  let modalHasil = new bootstrap.Modal(document.getElementById('modalHasil'));
  modalHasil.show();
}

function resetForm(){
  document.querySelectorAll(".nilai").forEach(input => {
    input.value = "";
  });
}

/* ===== TAMBAHKAN DI BAWAH INI ===== */

document.addEventListener("DOMContentLoaded", function(){

  const modalCek = document.getElementById('modalCek');

  if(modalCek){
    modalCek.addEventListener('hidden.bs.modal', resetForm);
  }

});




















