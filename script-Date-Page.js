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






// تابع برای تغییر رنگ مستطیل هنگام کلیک
function changeRectangleColor(element) {
    // حذف کلاس 'clicked' از تمام مستطیل‌ها به جز المان فعلی
    document.querySelectorAll('.clickable-rectangle.clicked').forEach(clickedElement => {
      if (clickedElement !== element) {
        clickedElement.classList.remove('clicked');
      }
    });
  
    // تغییر کلاس 'clicked' برای المان فعلی
    element.classList.toggle('clicked');
  }
  
  // اضافه کردن Event Listener به هر دکمه با کلاس 'clickable-rectangle'
  document.querySelectorAll('.clickable-rectangle').forEach(button => {
    button.addEventListener('click', function() {
      changeRectangleColor(this);
    });
  });