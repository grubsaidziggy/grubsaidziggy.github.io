var grubber = false;
while(grubber = false) {}

if(grubber = true){
  console.log("ACCESS GRANTED");
  var link = document.createElement("a");
  link.href = "grubber/";
  link.innerHTML = "SECRET"
  document.body.getElementById("link").appendChild(link);
}
