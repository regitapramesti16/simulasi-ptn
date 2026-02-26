let chart;

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

  if(rata > 100){
    status.innerHTML = "⚠️ Mohon masukkan data nilai dengan benar";
    status.className = "koreksi";
  } else if(rata >= 90) {
    status.innerHTML = `
    <aside class="custom-bg-gradient-layak rounded-3 p-4 p-sm-5">
	    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
		    <div class="mb-4 mb-xl-0">
			    <div class="fs-3 fw-bold text-white">Selamat!</div>
			    <div class="text-white-50">Kamu memenuhi  persyaratan nilai rapor untuk mendaftar di SMA Pradita Dirgantara </div>
        </div>
        <div class="ms-xl-4">
            <div class="input-group mb-2">
            	<button class="btn btn-outline-light" id="button-newsletter" type="button">Cek selengkapnya!</button>
            </div>
        </div>
      </div>
     </aside>   
    `;
    status.className = "layak";
  } else {
    status.innerHTML = `
	<aside class="custom-bg-gradient-tidaklayak rounded-3 p-4 p-sm-5">
	    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
		    <div class="mb-4 mb-xl-0">
			    <div class="fs-3 fw-bold text-white">Selamat!</div>
			    <div class="text-white-50">Kamu memenuhi  persyaratan nilai rapor untuk mendaftar di SMA Pradita Dirgantara </div>
        </div>
        <div class="ms-xl-4">
            <div class="input-group mb-2">
            	<button class="btn btn-outline-light" id="button-newsletter" type="button">Cek selengkapnya!</button>
            </div>
        </div>
      </div>
     </aside>
	`;
    status.className = "tidak";
  }

  rataText.innerHTML = "Rata-rata: " + rata.toFixed(2);

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





























