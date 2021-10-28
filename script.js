const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function CheckOnlineStatus(msg) {
  let status = document.getElementById("status");
  let condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  let state = document.getElementById("state");
  state.classList.add(condition);
  state.innerHTML = condition;
  let providerName = document.querySelector(".provider-name");
  let providerInfo = document.querySelector(".provider-info");

  if (condition === "ONLINE") {
    let { org } = await getApi("http://ip-api.com/json/");
    console.log(org);
    providerName.innerHTML = org;
  } else {
    providerInfo.style.display = "none";
  }
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
