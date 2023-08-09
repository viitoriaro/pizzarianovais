document.getElementById("menuIcon").addEventListener("click", function(event){
   console.log("oiii")
   var menuContent = document.getElementById("menuContent");
   menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
   event.stopPropagation()
})

document.addEventListener("click", function(event){
    let menuContent = document.getElementById('menuContent');
    let menuIcon = document.getElementById('menuIcon');
    if (!menuIcon.contains(event.target) && !menuContent.contains(event.targes)){
      menuContent.style.display = 'none'
    }

})