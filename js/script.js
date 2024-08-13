// ---- DEKLARASI VARIABEL berdasarkan ID dari Html ----
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// ---- Membuat fungsi Calculate() ----
function calculate(){
    /** Mengecek apakah ada nilai kosong pada elemen dengan ID ("age","height", "weight") dan Memeriksa apakah salah satu dari pilihan gender (male or female) Telah dipilih. */

  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block"; /**
     * Jika kondisi terpenuhi, tampilan dengan ID "myModal" diubah menjadi "block";*/

    modalText.innerHTML = `All fields are required!`;
    // Mengatur text di dalam element dengan ID "#modalText" menjadi "All fields are required!"

  }else{ /**
    Jika kondisi diatas tidak terpenuhi(Semua kolom terisi dan salah satu pilihan gender dipilih), Maka fungsi countBmi() Dijalankan.
    */
    countBmi();
  }

}