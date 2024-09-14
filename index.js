import { cimKiiras } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
import Kartya from "./Kartya.js";
import Kartyak from "./Kartyak.js";

let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";
//objektum, kulcs-érték párok
//egyetlen kutya adatai
// const kutya1 = {
//   nev: "Floki",
//   kor: 12,
//   nem: "kan",
// };
// const kutya2 = {
//   nev: "Dézi",
//   kor: 2,
//   nem: "szuka",
// };
// kutya1.nev = "Jenő";
// console.log("1. kutya:", kutya1);
// console.log("cím:", cim);

// //lista
// const nevlista = ["Dézi", "Jenő", "Béla"];
// const szamlista = [5, 3, 4, 7, -34.2];

// nevlista[0] = "Floki";

// console.log("lista", nevlista);

cimKiiras(cim);

// egyKutyaKiiras(kutya1)
// egyKutyaKiiras(kutya2)

const divElem = $(".tartalom");
//összes kutya kiírása
// kutyaLista.forEach((kutya, index) => {
//   console.log(kutya, index);
//   //egyKutyaKiiras(kutya);
//   new Kartya(kutya, divElem);
// });

// for (let index = 0; index < kutyaLista.length; index++) {
//     egyKutyaKiiras(kutyaLista[index])
// }

new Kartyak(kutyaLista, divElem)
