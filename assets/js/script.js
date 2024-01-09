
var faqs = document.querySelectorAll(".faq-item")

faqs.forEach((item, i )=>{
   item.addEventListener("click",()=>{
      item.classList.toggle("active")
   })
})



