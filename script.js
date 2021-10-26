function CheckOnlineStatus(msg) {
  var status = document.getElementById("status");
  var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  var state = document.getElementById("state");
  state.innerHTML = condition;
}
function Pageloaded() {
  CheckOnlineStatus("load");
  document.body.addEventListener(
    "offline",
    function () {
      CheckOnlineStatus("offline");
      location.reload();
    },
    false
  );
  document.body.addEventListener(
    "online",
    function () {
      CheckOnlineStatus("online");
      location.reload();
    },
    false
  );
}
