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
  
// ---- Membuat fungsi countBmi() ----
  function countBmi() {
    var p = [age.value, height.value, weight.value];
    // mendeklarasikan variabel p dan menginisialisasinya dengan sebuah array [] yang berisi 3 nilai dari tiga element: "age","height","weight" (Nilai ini diambil dari input user)
    if(male.checked) { // kondisi yang memeriksa apakah pilihan gender "male" atau "female" telah dipilih dan menambahkan string ke array p.
      p.push("male");
    } else if (female.checked) {
      p.push("female");

      // example: jika memilih male, array p berisi nilai ["age","height","weight","male"]
    }
  

  // ---- Menghitung Indeks Massa Tubuh(BMI) ----
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  /**
   * Number(p[2]): 
   * mengonversi nilai dari elemen ketiga dalam array p (weight) menjadi tipe data angka (number).
   * 
   * Number(p[1])/100: 
   * mengonversi nilai dari elemen kedua dalam array p (height) menjadi tipe data angka dan membaginya dengan 100. Ini mengubah tinggi dari sentimeter menjadi meter.
   * 
   * Number(p[1])/100*Number(p[1])/100:
   *  Ini mengalikan tinggi yang sudah dikonversi menjadi meter dengan dirinya sendiri (untuk menghitung kuadrat tinggi dalam meter).
   * 
   * Number(p[2])/(Number(p[1])/100*Number(p[1])/100): Ini membagi berat badan dengan kuadrat tinggi dalam meter untuk menghitung BMI.
   */

  var result = ''; //nilai default var result kosong
  if(bmi<18.5){
    result = 'Underweight'; //jika nilai BMI kurang dari 18.5, result = 'Underweight'
     }else if(18.5<=bmi&&bmi<=24.9){ //jika nilai BMI diantara 18.5 sampai 24.9, result = 'Healthy'
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){ //jika nilai BMI diantara 25 sampai 29.9, result = 'Overweight'
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){//jika nilai BMI diantara 30 sampai 34.9, result = 'Obese'
    result = 'Obese';
     }else if(35<=bmi){//jika nilai BMI lebih atau sama dengan 35, result = 'Extremely Obese'
    result = 'Extremely obese';
  }

  resultArea.style.display = "block"; //mengatur style element resultArea menjadi block
  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;//mengubah isi HTML dengan string "You are" {result(menampilkan isi result)} 
  document.querySelector("#result").innerHTML = bmi.toFixed(2);//mengatur isi HTML-nya menjadi nilai BMI (dibulatkan hingga dua desimal) yang ada dalam variabel bmi.
}


// Ketika pengguna mengklik <span> (x), tutup modal. 
span.onclick = function() {
  modal.style.display = "none";
}

// Saat pengguna mengklik di mana saja di luar modal, tutup modal tersebut
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}