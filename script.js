const saatEkrani = document.getElementById("clock");

function saatiGuncelle() {
  const suAn = new Date();
  const saat = suAn.getHours();
  const dakika = suAn.getMinutes();
  const saniye = suAn.getSeconds();

  saatEkrani.textContent = `${saat}:${dakika}:${saniye}`;
}

saatiGuncelle();
setInterval(saatiGuncelle, 1000);
