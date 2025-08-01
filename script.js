/* .js files add interaction to your website */

var factList = [
  "Babies currently living in Gaza are severly malnourished, without muscles and fat tissue, just the skin over the bone.",
  "More than 90 people per day have been killed in Gaza since October 7th, 2023",
  "As of July 2025, 1 in 3 people in Gaza have been going on without food for days at a time.",
  "Israel has received about $263bn between 1946 and 2023 from the US as foreign aid",
  "Leading international NGO, Human Rights Watch (HRW) says Israel is “committing the crimes against humanity of apartheid and persecution against Palestinians”.",
  "Between 2009 and 2022, at least 8,413 Palestinian-owned structures were demolished by Israeli forces, displacing at least 12,491 people.", 
  "From 2008 to 2023, at least 152,560 Palestinians and 6,307 Israelis were injured.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0

if (myButton) {
  myButton.addEventListener("click", displayFact);
}


function displayFact(){
  fact.innerHTML = "<strong>" + factList[count] + "</strong>";
  count++;
  if (count == factList.length){
    count = 0;
  }
}
