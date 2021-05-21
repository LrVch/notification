function showNotification({top, right, className, bottom, left, html = "note", time = 1500, transition = 500} ={}) {
  let note = document.createElement("div");

  note.className = "notification";
  note.style.transition = "opacity " + transition / 1000 + "s";
  if (className) note.classList.add(className);
  note.style.position = "fixed";
  if (bottom) note.style.bottom = bottom + "px";
  if (top) note.style.top = top + "px";
  if (right) note.style.right = right + "px";
  if (left) note.style.left = left + "px";
  note.style.right = right + "px";
  note.innerHTML = html;

  document.body.appendChild(note);

  setTimeout(() => note.classList.add("visible"), 0);

  setTimeout(() => {
    note.classList.remove("visible");
    setTimeout(() => document.body.removeChild(note), transition);
  }, time + transition);
}

showNotification({
  top: 10,
  left: 10,
  html: "Helle <b>user</b>",
  className: "welcome",
  time: 1600,
  transition: 700
});
