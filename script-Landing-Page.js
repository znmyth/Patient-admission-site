// document.addEventListener('DOMContentLoaded', function () {
//     var dropdown = document.querySelector('.dropdown-toggle');
//     dropdown.addEventListener('click', function (event) {
//       var dropdownMenu = this.nextElementSibling;
//       dropdownMenu.classList.toggle('show');
//     });
//   });


// انتظار برای بارگذاری کامل DOM
document.addEventListener('DOMContentLoaded', function() {
    // یافتن تمام عناصر با کلاس 'dropdown-toggle'
    var dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
  
    // اضافه کردن event listener به هر عنصر
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(event) {
        // جلوگیری از عملکرد پیش‌فرض لینک
        event.preventDefault();
  
        // یافتن منوی کشویی مربوط به این عنصر
        var dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-menu');
  
        // نمایش یا پنهان کردن منوی کشویی
        if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
        } else {
          dropdownMenu.style.display = 'block';
        }
      });
    });
  
    // بستن منوهای کشویی هنگام کلیک بیرون از آن‌ها
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-toggle')) {
        var dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(function(menu) {
          if (menu.style.display === 'block') {
            menu.style.display = 'none';
          }
        });
      }
    });
  });
  




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rtl: true,


  slidesPerView: 1,
  spaceBetween: -700,

  breakpoints: {
      767: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },

});


const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rtl: true,


  slidesPerView: 1,
  spaceBetween: -400,

  breakpoints: {
      767: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },

});


const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rtl: true,


  slidesPerView: 1,
  spaceBetween: -700,

  breakpoints: {
      767: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },

});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rtl: true,


  slidesPerView: 1,
  spaceBetween: -360,

  breakpoints: {
      767: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },

});

const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rtl: true,


  slidesPerView: 1,
  spaceBetween: -600,

  breakpoints: {
      767: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },

});




// modal login

// جاوااسکریپت برای کنترل مدال
// var modal = document.getElementById('myModal');
// var btn = document.getElementById('myBtn');
// var span = document.getElementsByClassName('close')[0];

// // هنگامی که کاربر بر روی دکمه کلیک می‌کند، مدال نمایش داده شود
// btn.onclick = function() {
//   modal.style.display = 'block';
// }

// // هنگامی که کاربر بر روی دکمه (x) کلیک می‌کند، مدال بسته شود
// span.onclick = function() {
//   modal.style.display = 'none';
// }

// // هنگامی که کاربر در هر جایی خارج از مدال کلیک کند، مدال بسته شود
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }




// // JavaScript to control the modal
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// دریافت المان مدال
var modal = document.getElementById('myModal');

// دریافت دکمه‌ای که باعث باز شدن مدال می‌شود
var btn = document.getElementById('myBtn');

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


var phoneRegex = /^\d{11}$/;
var phoneNumber = document.getElementById('phone').value;

if(phoneRegex.test(phoneNumber)) {
  // شماره تلفن معتبر است
} else {
  // شماره تلفن نامعتبر است
}

document.getElementById('phone').addEventListener('input', function (e) {
  var value = e.target.value;
  var numericValue = value.replace(/[^\d]/g, ''); // حذف همه چیز به جز اعداد
  if (numericValue.length > 11) {
    numericValue = numericValue.slice(0, 11); // محدود کردن به ۱۱ رقم
  }
  e.target.value = numericValue; // به‌روزرسانی مقدار با اعداد فقط
});




// این تابع رنگ عنوانی که روی آن کلیک شده را تغییر می‌دهد
function changeColor(element) {
  // حذف کلاس 'active' از تمام عنوان‌ها
  document.querySelectorAll('.title').forEach(function(el) {
    el.classList.remove('active');
  });

  // افزودن کلاس 'active' به عنوانی که روی آن کلیک شده است
  element.classList.add('active');
}