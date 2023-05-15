
document.getElementById("button").addEventListener("click", click)

function click() {
    fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {
    document.getElementById("activity").innerText = data.activity
    console.log(data.activity);
  })
    console.log("click");
}