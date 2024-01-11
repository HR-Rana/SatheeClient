


// NAVBAR MOBILE VERSION RESPONSIVE ICON

   $("#bars-icon").click(function(){
      $(".navigation-bar .nav-items").toggle(200);
      $("#bars-icon span").toggle();
   })




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



