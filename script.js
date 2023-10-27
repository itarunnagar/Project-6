const menuBar = document.querySelector(".menuBar");
menuBar.addEventListener("click", openNavBar);

// NavBAr Function
function openNavBar() {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("open");
  if (navigation.classList.contains("open")) {
    navigation.style.maxHeight = navigation.scrollHeight + "px";
  } else {
    navigation.removeAttribute("style");
  }
}
