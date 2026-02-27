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
    status.innerHTML = `
	<aside class="custom-bg-gradient-warning rounded p-4 p-sm-5">
	    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-left">
		    <div class="mb-4 mb-xl-0 text-center">
			    <div class="h4 font-weight-bold text-white">Upss...</div>
			    <div class="text-white">Masukan data nilai dengan benar, ya</div>
        	</div>
       		 <div class="ms-xl-4">
            	<div class="input-group mb-2">
            		<button class="btn btn-outline-light" id="button-newsletter" type="button">Cek selengkapnya!</button>
             	</div>
        	 </div>
      	</div>
     </aside>
	`;
    status.className = "koreksi";
  } else if(rata >= 90) {
    status.innerHTML = `
    <aside class="custom-bg-gradient-layak rounded p-4 p-sm-5">
	    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-left">
		    <div class="mb-4 mb-xl-0 text-center">
			    <div class="h4 font-weight-bold text-white">Selamat!</div>
			    <div class="text-white">Kamu memenuhi  persyaratan nilai rapor untuk mendaftar di SMA Pradita Dirgantara</div>
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
	<aside class="custom-bg-gradient-tidaklayak rounded p-4 p-sm-5">
	    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-left">
		    <div class="mb-4 mb-xl-0 text-center">
			    <div class="h4 font-weight-bold text-dark">Maaf...</div>
			    <div class="text-dark">Persyaratan nilai rapor yang kamu miliki belum bisa untuk mendaftar di SMA Pradita Dirgantara</div>
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

  $('#modalCek').modal('hide');
  $('#modalHasil').modal('show');
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
    $('#modalCek').on('hidden.bs.modal', resetForm);
  }

});






































