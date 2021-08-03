function proses() {
  // Deklarasi
  var nama_barang = document.getElementById("nama_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  // proses
  switch (nama_barang) {
    case "1":
      var hm = 2000000;
      document.getElementById("harga").value = hm;
      break;
    case "2":
      var hc = 3500000;
      document.getElementById("harga").value = hc;
      break;
    case "3":
      var hs = 300000;
      document.getElementById("harga").value = hs;
      break;
    case "4":
      var hk = 500000;
      document.getElementById("harga").value = hk;
      break;

    default:
      break;
  }

  // deklarasi agar nilai harga berubah
  var harga = document.getElementById("harga").value;

  // menghitung total
  var total = jumlah * harga;

  document.getElementById("total").value = total;
}
