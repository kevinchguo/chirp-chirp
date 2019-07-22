function chirp(n) {
  if (n === 1) {
    return "chirp";
  }
  return "chirp" + " " + chirp(--n);
}
console.log(chirp(3));

$(document).ready(function() {
  $("#result").html(chirp(3));
});
