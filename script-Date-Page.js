// alert("hello world!!!!!!");
// new swiper(".swiper-container", {
//     loop:true,
//     slidesPerView:4,
//     spaceBetween:25,
//     pagination: {
//         el: ".swiper-pagination",
//     }
// })


  
// دریافت المان مدال
var modal = document.getElementById('registerModal');

// دریافت دکمه‌ای که باعث باز شدن مدال می‌شود
var btn = document.getElementById('myBtn'); // تغییر شناسه به myBtn

// دریافت المان <span> که باعث بسته شدن مدال می‌شود
var span = document.getElementsByClassName('close')[0];

// وقتی کاربر روی دکمه کلیک می‌کند، مدال باز می‌شود
btn.onclick = function() {
  modal.style.display = 'block';
}

// وقتی کاربر روی <span> (x) کلیک می‌کند، مدال بسته می‌شود
span.onclick = function() {
  modal.style.display = 'none';
}

// وقتی کاربر روی هر جایی خارج از مدال کلیک می‌کند، مدال بسته می‌شود
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}





  // اضافه کردن انیمیشن پس از بارگذاری صفحه
  document.addEventListener('DOMContentLoaded', function() {
    // بارگذاری انیمیشن Lottie
    var animation = lottie.loadAnimation({
      container: document.getElementById('lottieContainer'), // المانی که انیمیشن در آن نمایش داده می‌شود
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Animation - 1718889290212.json' // مسیر فایل JSON انیمیشن
    });
  });