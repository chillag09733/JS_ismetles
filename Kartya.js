export default class Kartya {
  #kutya = {}; //privát adattag

  constructor(kutya, szuloElem) {
    /* inicializálja az adattagokat */
    this.#kutya = kutya;
    this.szuloElem = szuloElem;
    this.#egyKutyaKiiras();
    this.gombElem = $(".kivalaszt:last");
    console.log(this.gombElem);
    this.#esemenyKezelo();
  }

  #esemenyKezelo() {
    this.gombElem.on("click", (event) => {
      console.log(this); //html elem ami kiváltja az eseményt, kiirja példányosításkor létrejött objektumokat
    });
  }

  #egyKutyaKiiras() {
    this.szuloElem.append(`<div class = "col-lg-4 col-md-6 card">
          <h3> ${this.#kutya.nev} </h3>
          <p> ${this.#kutya.kor} </p>
          <p> ${this.#kutya.nem} </p>
          <button class = "kivalaszt btn btn-outline-success">Kiválaszt</button>
      </div>`);
  }
}
