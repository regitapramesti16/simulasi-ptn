let chart;

function tampilkanGrafik(){
  const mtk = avg(".mtk");
  const ipa = avg(".ipa");
  const eng = avg(".eng");

  if(chart){
    chart.destroy();
  }

  chart = new Chart(document.getElementById('chartNilai'), {
    type: 'bar',
    data: {
      labels: ['Matematika','IPA','Bahasa Inggris'],
      datasets: [{
        data: [mtk, ipa, eng]
      }]
    },
    options: {
      responsive:true,
      plugins:{legend:{display:false}}
    }
  });
}
