const profile = document.getElementById("profile")
const friend = document.getElementById("friend")

window.addEventListener("resize", (event) => {
  if(event.target.innerWidth > 768){
    profile.classList.add("border-start")
    profile.classList.add("border-2")
    friend.classList.remove("hidden")
  }
  else{
    profile.classList.remove("border-start")
    profile.classList.remove("border-2")
    friend.classList.add("hidden")
  }
})