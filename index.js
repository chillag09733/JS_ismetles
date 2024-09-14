import { cimKiiras } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
import Kartya from "./Kartya.js";
import Kartyak from "./Kartyak.js";

const kivalasztottLista = []

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
const kivElem = $(".kivalasztottak");
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

//melyik kártyára kattintottunk? adatokat együk bele a kiválasztott listába
// privát adattage lérése osztályban
// 1. getter és meg kell hívni
//probléma, hogy ezt a getter akkor kéne meghívni, ha rákattintanak a gombra
//feliratkozunk a saját eseményünkre

$(window).on("kivalaszt", (event) => {
  console.log(event.detail)
  kivalasztottLista.push(event.detail)
  console.log(kivalasztottLista)
  new Kartyak(kivalasztottLista, kivElem)
})



