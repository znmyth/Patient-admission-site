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























// highcharts.com
Highcharts.chart('container001', {
  chart: {
      type: 'bar',
      backgroundColor: '#f5f5f5',
      style: {
        fontFamily: 'Vazir FD-UI'
      }
  },
  title: {
      text: '',
      align: 'left'
  },

  xAxis: {
      categories: ['5', '4', '3', '2','1'],
      title: {
          text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
  },
  yAxis: {
      min: 0,

      title: {
        text: ''
    },

      labels: {
          overflow: 'justify'
      },
      gridLineWidth: 0
  },

  plotOptions: {
      bar: {
          borderRadius: '50%',
          dataLabels: {
              enabled: true
          },
          groupPadding: 0.1
      }
  },
  legend: {



      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,

      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'امتیاز',
      color: 'gold',
      data: [330, 224, 69 ,82, 51]}
  // }, {
  //     name: 'Year 2000',
  //     data: [814, 841, 3714, 726]
  // }, {
  //     name: 'Year 2018',
  //     data: [1276, 1007, 4561, 746]
  // }]
  ]
});
  











// let currentPage = 1; // متغیر برای نگهداری شماره صفحه فعلی

// function changePage(pageNumber) {
//   if (pageNumber < 1) pageNumber = 1; // جلوگیری از رفتن به صفحه منفی
//   if (pageNumber > totalPages) pageNumber = totalPages; // جلوگیری از رفتن به صفحه‌ای که وجود ندارد

//   currentPage = pageNumber; // به‌روزرسانی شماره صفحه فعلی
//   fetchCommentsForPage(pageNumber);
// }

// function fetchCommentsForPage(pageNumber) {
//   // کد برای دریافت داده‌ها از سرور بر اساس شماره صفحه
//   console.log('دریافت نظرات برای صفحه', pageNumber);
//   // اضافه کردن کد برای بارگذاری داده‌ها از سرور و نمایش آن‌ها در #comments-container
// }








// // JavaScript
// function loadContent(pageNumber) {
//   // اینجا کد برای بارگذاری محتوای مربوط به شماره صفحه مورد نظر را قرار دهید
//   // برای مثال، می‌توانید از یک سوئیچ یا شرط استفاده کنید:
//   switch (pageNumber) {
//     case 1:
//       document.getElementById('comments-container').innerHTML = 'محتوای صفحه 1';
//       break;
//     case 2:
//       document.getElementById('comments-container').innerHTML = 'محتوای صفحه 2';
//       break;
//     // اضافه کردن کیس‌های بیشتر برای صفحات بیشتر
//     default:
//       document.getElementById('comments-container').innerHTML = 'محتوای پیش‌فرض';
//   }
// }




// JavaScript
// let currentPage = 1; // شماره صفحه فعلی
// const totalPages = 2; // تعداد کل صفحات

// function changePage(direction) {
//   currentPage += direction;
//   if (currentPage < 1) {
//     currentPage = totalPages;
//   } else if (currentPage > totalPages) {
//     currentPage = 1;
//   }
//   updateContent(currentPage);
// }

// function updateContent(pageNumber) {
//   // پنهان کردن تمام صفحات محتوا
//   document.querySelectorAll('.content-page').forEach(page => {
//     page.classList.remove('active');
//   });

//   // نمایش صفحه محتوای مورد نظر
//   const pageId = 'content-page-${pageNumber}'; // استفاده صحیح از template literals
//   document.getElementById(pageId).classList.add('active');
// }

// // اولین بارگذاری
// updateContent(currentPage);








let currentPage = 1; // شماره صفحه فعلی
const totalPages = 2; // تعداد کل صفحات

function changePage(pageNumber) {
  currentPage = pageNumber;

  if (currentPage < 1) {
    currentPage = totalPages;
  } else if (currentPage > totalPages) {
    currentPage = 1;
  }

  updateContent(currentPage);
}

function updateContent(pageNumber) {
  document.querySelectorAll('.content-page').forEach(page => {
    page.classList.remove('active');
  });

  const pageId = `content-page-${pageNumber}`;
  document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  updateContent(currentPage);
});