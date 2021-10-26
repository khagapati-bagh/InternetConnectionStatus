const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function CheckOnlineStatus(msg) {
  let { org } = await getApi("http://ip-api.com/json/");
  let status = document.getElementById("status");
  let providerName = document.querySelector(".provider-name");
  let condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  let state = document.getElementById("state");
  state.classList.add(condition);
  state.innerHTML = condition;
  providerName.innerHTML = org;
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
