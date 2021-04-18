bikeshed.view.updateBike = {
    setupUserInterface: function() {
        var formEl = document.forms["Bike"],
            saveButton = formEl.commit,
            selectBike = formEl.selectBike,
            key="",
            keys=[],
            bike=null,
            optionEl=null,
            i=0;

        Bike.loadAll();

        keys = Object.keys(Bike.instances);

        for (i=0; i < keys.length; i++) {
            key = keys[i];
            bike = Bike.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = bike.model;
            optionEl.value = bike.id;
            selectBike.add(optionEl, null);
        }

        selectBike.addEventListener("change", function() {
            var bike, key=selectBike.value;
            if (key) {
                bike = Bike.instances[key];
                formEl.id.value = bike.id;
                formEl.brand.value = bike.brand;
                formEl.model.value = bike.model;
                formEl.year.value = bike.year;
            } else {
                formEl.reset();
            }
        })

        saveButton.addEventListener("click",bikeshed.view.updateBike.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function() {
            Bike.saveAll();
        })

    },
    handleSaveButtonClickEvent: function() {
        var formEl = document.forms["Bike"];
        var bike = {
            id: formEl.id.value,
            brand: formEl.brand.value,
            model: formEl.model.value,
            year: formEl.year.value
        };

        Bike.update(bike);
        formEl.reset();
    }
}