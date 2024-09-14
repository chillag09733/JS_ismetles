export function cimKiiras(cim) {
  //header h1 tagjébe fűzzük hozzá a címet
  // js - const h1Elem = document.querySelector("header h1")
  const h1Elem = $("header");
  console.log(h1Elem);
  // js - h1Elem.innerHTML += "<p>" + cim + "</p>"
  //h1Elem.append("<p>" + cim + "</p>")
  h1Elem.append(`<p> ${cim} </p>`);
}

/*kész-ts függvényt, amivel a kutya1 adatait írhatjuk ki a tartalom nevezetű class-ba
  div-ben legyen, név - h2, kor - p, nem - p*/

//   export function adatKiiras(){
//     const artElem = document.querySelector(".tartalom")
//     const divElem = document.createElement("div")
//     for (let index = 0; index < kutyaLista.length; index++) {
//         const element = kutyaLista[index];
//         const h2Elem = document.createElement("h2")
//         h2Elem.textContent = element.nev
//         const pElem = document.createElement("p")
//         pElem.textContent = element.kor
//         const pElem2 = document.createElement("p")
//         pElem2.textContent = element.nem
//         divElem.append(h2Elem, pElem, pElem2)
//     }
//     artElem.append(divElem)
//   }

export function egyKutyaKiiras(kutya) {
  const divElem = $(".tartalom");
  divElem.append(`<div class = "col-lg-4 col-md-6 card">
    <h3> ${kutya.nev} </h3>
    <p> ${kutya.kor} </p>
    <p> ${kutya.nem} </p>
    <button class = "kivalaszt btn btn-outline-success">Kiválaszt</button>
</div>`);
}

