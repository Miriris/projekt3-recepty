/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let seznam = document.querySelector('#recepty');

function vytvorSeznam() {
  for (let i = 0; i < recepty.length; i++) {
    let divElement = document.createElement('div');
    divElement.className = 'recept';
    divElement.dataset.recept = i;

    seznam.appendChild(divElement);
    divElement.onclick = klikNaRecept;
    let divElementImg = document.createElement('div');
    divElement.appendChild(divElementImg);
    divElementImg.className = 'recept-obrazek';
    let obrazek = document.createElement('img');
    divElementImg.appendChild(obrazek);
    obrazek.src = recepty[i].img;
    obrazek.alt = 'Obrazek';
    let divElement2 = document.createElement('div');
    divElement.appendChild(divElement2);
    divElement2.className = 'recept-info';
    let nadpis = document.createElement('h3');
    divElement2.appendChild(nadpis);
    nadpis.textContent = recepty[i].nadpis;
    localStorage.recept;
  }
  nactiRecept();
}

vytvorSeznam();

function klikNaRecept() {
  let foto = document.querySelector('#recept-foto');
  let i = parseInt(this.dataset.recept);
  console.log(i);
  foto.src = recepty[i].img;
  let kategorie = document.querySelector('#recept-kategorie');
  kategorie.textContent = recepty[i].kategorie;
  let hodnoceni = document.querySelector('#recept-hodnoceni');
  hodnoceni.textContent = recepty[i].hodnoceni;
  let nazev = document.querySelector('#recept-nazev');
  nazev.textContent = recepty[i].nadpis;
  let popis = document.querySelector('#recept-popis');
  popis.textContent = recepty[i].popis;
  localStorage.recept = JSON.stringify(recepty[i]);
  console.log(localStorage);
}

function nactiRecept() {
  let recept = localStorage.recept;
  console.log(recept);
  if (recept === null || recept === undefined) {
    ('');
  } else {
    recept = JSON.parse(recept);
    console.log(recept);
    let foto = document.querySelector('#recept-foto');
    foto.src = recept.img;
    let kategorie = document.querySelector('#recept-kategorie');
    kategorie.textContent = recept.kategorie;
    let hodnoceni = document.querySelector('#recept-hodnoceni');
    hodnoceni.textContent = recept.hodnoceni;
    let nazev = document.querySelector('#recept-nazev');
    nazev.textContent = recept.nadpis;
    let popis = document.querySelector('#recept-popis');
    popis.textContent = recept.popis;
  }
}
