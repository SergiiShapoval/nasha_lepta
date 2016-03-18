document.addEventListener("DOMContentLoaded", currentYear());
function currentYear() {
      var date = new Date();
      document.getElementById('currentYear').innerHTML = date.getFullYear();
}
