function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
  
    const time = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
  
    document.getElementById("clock").innerHTML = time;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  