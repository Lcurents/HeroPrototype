function Akun(nama, energy, attack, defense) {
  this.nama = nama;
  this.energy = energy;
  this.attack = attack;
  this.defense = defense;
}
Akun.prototype.makan = function (porsi) {
  this.energy += porsi;
  this.attack += porsi;
  this.defense += porsi;
  return ``;
};
Akun.prototype.hit = function (kesakitan) {
  this.energy -= kesakitan;
  this.attack -= kesakitan;
  this.defense -= kesakitan;
  return ``;
};
let dika = new Akun('Dika', 20, 30, 10);
let doni = new Akun('Doni', 30, 15, 15);

function klikdika() {
  document.getElementById('data').innerHTML = `<p>Nama: ${dika.nama}</p><p>Energy: ${dika.energy}</p><p>Attack: ${dika.attack}</p><p>Defense: ${dika.defense}</p><br>`;
  hitoreat();
}

function klikdoni() {
  document.getElementById('data').innerHTML = `<p>Nama: ${doni.nama}</p><p>Energy: ${doni.energy}</p><p>Attack: ${doni.attack}</p><p>Defense: ${doni.defense}</p><br>`;
  hitoreat();
}
function hitoreat() {
  document.getElementById('hitoreat').innerHTML = `<button id="isiEnergy" onclick="isi()">Isi Energy</button>
    <button id="kenaHit" onclick="hit()">Terkena Hit</button>`;
}
function hit() {
  document.getElementById('input').innerHTML = `<br><label for="hit">Damage Hit:</label>
    <input type="number" name="hit" id="hit" /><br><br><button onclick="kenaHit()">Submit</button>`;
}
function isi() {
  document.getElementById('input').innerHTML = `<br><label for="makan">Isi Energy:</label>
    <input type="number" name="makan" id="makan" /><br><br><button onclick="tambahenergy()">Submit</button>`;
}
function tambahenergy() {
  let nilai = parseInt(document.getElementById(`makan`).value);
  dika.makan(nilai);
  if ((Akun.nama = 'Dika')) {
    klikdika();
  } else {
    klikdoni();
  }
}
function kenaHit() {
  let nilai = parseInt(document.getElementById(`hit`).value);
  dika.hit(nilai);
  if ((Akun.nama = 'Dika')) {
    klikdika();
  } else {
    klikdoni();
  }
}
