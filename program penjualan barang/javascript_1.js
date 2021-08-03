function hitung() {
  // Deklarasi
  var harga = document.getElementById("Harga").value;
  var jumlah = document.getElementById("Jumlah").value;

  // menghitung hasil
  var hasil = harga * jumlah;
  document.getElementById("Total").value = hasil;

  // menghitung diskon
  if (hasil > 100000) {
    diskon = 0.15;
    document.getElementById("Diskon").value = "15%";
  } else {
    diskon = 0;
    document.getElementById("Diskon").value = "0";
  }

  // menghitung total yang harus dibayar sesudah diskon
  var totalbayar = hasil * diskon;
  bayar = hasil - totalbayar;
  document.getElementById("Bayar").value = bayar;
}
