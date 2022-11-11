fetch("https://gamertocoder.garena.co.th/api/minigames")
.then((response) => {
  if (response.status !== 200){
    return response.status;
  }
  return response.json();
})
.then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
      console.log(data);
    }
 });

 