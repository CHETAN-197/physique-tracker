const w = document.getElementById("weight");
const wa = document.getElementById("waist");
const out = document.getElementById("output");

function saveData() {
  localStorage.setItem("weight", w.value);
  localStorage.setItem("waist", wa.value);
  showData();
}

function showData() {
  w.value = localStorage.getItem("weight") || "";
  wa.value = localStorage.getItem("waist") || "";
  out.innerText =
    "Weight: " + (w.value || "-") + " kg | Waist: " + (wa.value || "-") + " in";
}

showData();
