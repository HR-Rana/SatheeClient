


// NAVBAR MOBILE VERSION RESPONSIVE ICON

   $("#bars-icon").click(function(){
      alert("hello js")
      $(".navigation-bar .nav-items").css("display", "none");;
      $("#bars-icon span").toggle();
   })

// NAVBAR MOBILE VERSION RESPONSIVE ICON
   // const navItems = document.querySelector(".navigation-bar .nav-items");
   // const barsIcon = document.getElementById("bars-icon");

   // barsIcon.addEventListener("click", ()=>{
   //    navItems.style.display="block";
   //    barsIcon.toggle("span");
   // })


// portal page sidebar Responsive

$(".portal-bars").click(function(){
   $(".prortal-layout .left-sitebar").toggle(200);
})


// FAQ SECITON ACCORDIN TOGGLER
var faqs = document.querySelectorAll(".faq-item")

faqs.forEach((item, i )=>{
   item.addEventListener("click",()=>{
      item.classList.toggle("active")
   })
})



