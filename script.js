//promenjive
const pitanje = document.getElementById("pitanje");
const nizPitanja = ["pitanje1", "pitanje2", "pitanje3", "pitanje4", "pitanje5"];
const duzinaNiza = nizPitanja.length;

let radnomBr = Math.floor(Math.random() * duzinaNiza);

// main
pitanje.innerHTML = nizPitanja[radnomBr];
