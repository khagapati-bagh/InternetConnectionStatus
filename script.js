function CheckOnlineStatus(msg) {
  var status = document.getElementById("status");
  var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  var state = document.getElementById("state");
  state.innerHTML = condition;
}

function Pageloaded() {
  CheckOnlineStatus("load");

  window.ononline = function () {
    CheckOnlineStatus("online");
    location.reload();
  };

  window.onoffline = function () {
    CheckOnlineStatus("offline");
    location.reload();
  };
}
