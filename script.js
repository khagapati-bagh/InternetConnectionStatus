function CheckOnlineStatus(msg) {
  var status = document.getElementById("status");
  var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  var state = document.getElementById("state");
  state.classList.add(condition);
  state.innerHTML = condition;
}
function Pageloaded() {
  CheckOnlineStatus("load");
  document.body.addEventListener(
    "offline",
    function () {
      CheckOnlineStatus("offline");
    },
    false
  );
  document.body.addEventListener(
    "online",
    function () {
      CheckOnlineStatus("online");
    },
    false
  );
}

function getIP(json) {
  alert("My public IP address is: " + json.ip);
}
