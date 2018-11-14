var countDownDate = new Date("Nov 14, 2019 08:40:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sat").innerHTML = "수능 시작까지 " + days + "일 " + hours + "시간 "
  + minutes + "분 " + seconds + "초. ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sat").innerHTML = "이미 너는 최고야 :)";
  }
}, 1000);
