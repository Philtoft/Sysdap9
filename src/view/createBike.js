bikeshed.view.createBike = {
  setupUserInterface: function () {
    var createBikeBtn = document.forms["Bike"].commit;

    Bike.loadAll();

    createBikeBtn.addEventListener("click", bikeshed.view.createBike.handleCreateBikeClickEvent);
    window.addEventListener("beforeunload", function () {
      Bike.saveAll();
    });
  },

  handleCreateBikeClickEvent: function () {
    var formEL = document.forms["Bike"];
    var bike = {
      id: formEL.id.value,
      brand: formEL.brand.value,
      model: formEL.model.value,
      year: formEL.year.value,
    };
    Bike.add(bike);
    formEL.reset();
  },
};
