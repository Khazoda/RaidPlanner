var spans = document.getElementById("span_container").childNodes;
for (var i = 0; i < spans.length; i++) {
  if (spans[i].nodeName.toLowerCase() == "span") {
    setTimeout(() => {
      spans[i].classList.add("animate_right");
    }, 300);
    //  spans[i].style.background = "yellow";
  }
}
