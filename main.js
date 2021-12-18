const profile = document.getElementById("profile")

window.addEventListener("resize", (event) => {
  if(event.target.innerWidth > 768){
    profile.classList.add("border-start")
    profile.classList.add("border-2")
  }
  else{
    profile.classList.remove("border-start")
    profile.classList.remove("border-2")
  }
})