(function () {
  var field = document.getElementById("stars");
  if (!field) return;
  var count = window.innerWidth < 600 ? 60 : 120;
  for (var i = 0; i < count; i++) {
    var s = document.createElement("div");
    s.className = "star";
    var size = Math.random() * 2 + 0.6;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = 2 + Math.random() * 4 + "s";
    s.style.animationDelay = Math.random() * 4 + "s";
    field.appendChild(s);
  }
})();
