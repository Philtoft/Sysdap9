function Bike(bike) {
  this.id = bike.id;
  this.brand = bike.brand;
  this.model = bike.model;
  this.year = bike.year;
  // this.owner = slots.owner;
}

Bike.instances = {};

Bike.convertRow2Obj = function (bikeRow) {
  var bike = new Bike(bikeRow);
  return bike;
};

Bike.loadAll = function () {
  var key = "",
    keys = [],
    bikeString = "",
    bikes = {},
    i = 0;
  try {
    if (localStorage.getItem("bikes")) {
      bikeString = localStorage.getItem("bikes");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (bikeString) {
    // Vi får objektet som string "{brand: '', model: '', year:''}"
    bikes = JSON.parse(bikeString);

    // Konverteret til objekt, nu gemmes alle keys i array
    keys = Object.keys(bikes);
    console.log(key.length + " bikes loaded.");
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      Bike.instances[key] = Bike.convertRow2Obj(bikes[key]);
    }
  }
};

Bike.saveAll = function () {
  var bikeString = "",
    error = false,
    nmrOfBikes = Object.keys(Bike.instances).length;

  try {
    bikeString = JSON.stringify(Bike.instances);
    localStorage.setItem("bikes", bikeString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log(nmrOfBikes + " books saved.");
};

Bike.add = function (slots) {
  var bike = new Bike(slots);
  Bike.instances[slots.id] = bike;
  console.log("Bike " + slots.id + " created!");
};

Bike.update = function (slots) {
  var bike = Bike.instances[slots.id];
  if (bike.brand !== slots.brand) bike.brand = slots.brand;
  if (bike.model !== slots.model) bike.model = slots.model;
  if (bike.year !== slots.year) bike.year = slots.year;
  console.log("Bike " + slots.id + " updated");
};

Bike.destroy = function (id) {
  if (Bike.instances[id]) {
    console.log("Book " + id + " deleted");
    delete Bike.instances[id];
  } else {
    console.log("There is no bike with ID " + id + " in the database");
  }
};

Bike.clearData = function () {
  if (confirm("Do you really want to delete all the bikes?")) {
    Bike.instances = {};
    localStorage.setItem("bikes", "{}");
  }
};
