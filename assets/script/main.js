function getDataForm(event) {
  event.preventDefault();
  return Object.fromEntries(new FormData(event.target));
}

function init() {
  console.log("start....");
}

window.onload = () => {
  init();
};
