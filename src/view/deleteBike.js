bikeshed.view.deleteBike = {
    setupUserInterface: function() {
        var deleteButton = document.forms["bike"].commit;
        var selectEl = document.forms["bike"].selectBike;
        var key="", keys=[], bike=null, optionEl=null, i=0;

        Bike.loadAll();

        keys = Object.keys(Bike.instances);

        for (i=0; i < keys.length; i++) {
            key = keys[i];
            bike = Bike.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = bike.model;
            optionEl.value = bike.id;
            selectEl.add
            (optionEl, null);
        }

        deleteButton.addEventListener("click", bikeshed.view.deleteBike.handleDeleteButtonClickEvent);

        window.addEventListener("beforeunload", function() {
            Bike.saveAll();
        })

    },
    handleDeleteButtonClickEvent: function() {
        var selectEl = document.forms["bike"].selectBike;
        var id = selectEl.value;
        if (id) {
            Bike.destroy(id);
            selectEl.remove( selectEl.selectedIndex );
        }
    }
}