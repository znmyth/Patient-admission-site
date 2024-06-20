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






// انتظار برای بارگذاری کامل DOM
document.addEventListener('DOMContentLoaded', function() {
  // یافتن تمام عناصر با کلاس 'dropdown-toggle00'
  var dropdownToggles = document.querySelectorAll('.link00.dropdown-toggle00');

  // اضافه کردن event listener به هر عنصر
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
      // جلوگیری از عملکرد پیش‌فرض لینک
      event.preventDefault();

      // یافتن منوی کشویی مربوط به این عنصر
      var dropdownMenu = this.closest('.dropdown00').querySelector('.dropdown-menu00');

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
    if (!event.target.matches('.dropdown-toggle00')) {
      var dropdownMenus = document.querySelectorAll('.dropdown-menu00');
      dropdownMenus.forEach(function(menu) {
        if (menu.style.display === 'block') {
          menu.style.display = 'none';
        }
      });
    }
  });
});










function expandText() {
  var dots = document.querySelector('.tab-yar');
  var moreText = document.getElementById("more-text");

  if (dots.style.overflow === "hidden") {
    dots.style.overflow = "visible";
    dots.style.whiteSpace = "normal";
    moreText.style.display = "inline";
  } else {
    dots.style.overflow = "hidden";
    dots.style.whiteSpace = "nowrap";
    moreText.style.display = "none";
  }
}




// دریافت المان مدال ورود شماره تلفن
var phoneModal = document.getElementById('myModal');

// دریافت المان مدال OTP
var otpModal = document.getElementById('otpModal');

// دریافت دکمه‌ای که باعث باز شدن مدال OTP می‌شود
var btn = document.getElementById('myybtn');

// دریافت المان <span> که باعث بسته شدن مدال‌ها می‌شود
var spans = document.getElementsByClassName('close');

// وقتی کاربر روی دکمه کلیک می‌کند، مدال OTP باز می‌شود
btn.onclick = function() {
  otpModal.style.display = 'block';
  phoneModal.style.display = 'none'; // مخفی کردن مدال ورود شماره تلفن
}

// تابع برای بستن مدال‌ها
function closeModal(modal) {
  modal.style.display = 'none';
}

// اضافه کردن رویداد کلیک به هر <span> برای بستن مدال‌ها
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    closeModal(this.parentElement.parentElement);
  }
}

// وقتی کاربر روی هر جایی خارج از مدال‌ها کلیک می‌کند، مدال‌ها بسته می‌شوند
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
}










  // این تابع به صورت خودکار فوکوس را به المان بعدی منتقل می‌کند
  function moveToNextElement(event) {
    var target = event.target;
    if(target.value.length >= target.maxLength) {
      var nextElement = target.nextElementSibling;
      if(nextElement && nextElement.children[0]) {
        nextElement.children[0].focus();
      }
    }
  }

  // اضافه کردن event listener به هر input
  var inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(function(input) {
    input.addEventListener('input', moveToNextElement); // تغییر از keyup به input
    // اضافه کردن event listener برای جلوگیری از ورود غیر عددی
    input.addEventListener('keypress', function(e) {
      var char = String.fromCharCode(e.which);
      if (!(/[0-9]/.test(char))) {
        e.preventDefault();
      }
    });
  });












  // این تابع مدال فعلی را می‌بندد و مدال جدید را باز می‌کند
function switchModal() {
  // بستن مدال فعلی
  document.getElementById('otpModal').style.display = 'none';

  // باز کردن مدال جدید
  document.getElementById('myModal').style.display = 'block';
}

// اضافه کردن event listener به div با کلاس edit-number000
document.querySelector('.edit-number000').addEventListener('click', switchModal);

