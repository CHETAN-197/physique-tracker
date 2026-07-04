const w = document.getElementById("weight");
const wa = document.getElementById("waist");
const out = document.getElementById("output");

function show() {
  w.value = localStorage.getItem("weight") || "";
  wa.value = localStorage.getItem("waist") || "";
  out.innerText = `Weight: ${w.value} kg | Waist: ${wa.value} in`;
}

function save() {
  localStorage.setItem("weight", w.value);
  localStorage.setItem("waist", wa.value);
  show();
}

show();
