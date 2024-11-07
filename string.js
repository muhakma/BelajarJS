let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian awal:", antrian);

antrian.push("Nabila");
console.log("Setelah Nabila datang:", antrian);

antrian.push("Maza", "Elsi");
console.log("Setelah Maza dan Elsi datang:", antrian);

antrian.pop();
console.log("Setelah Elsi pulang:", antrian);

antrian.shift();
console.log("Setelah Ray mendapatkan belanjaan:", antrian);

antrian.shift();
console.log("Setelah Fiki mendapatkan belanjaan:", antrian);

antrian.unshift("Tomi");
console.log("Setelah Tomi nyerobot:", antrian);

console.log("Antrian akhir:", antrian);