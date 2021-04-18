bikeshed.view.listBikes = {
    setupUserInterface: function() {
        var tableBodyEl = document.querySelector("table#bikes>tbody");
        var keys=[], key="", row={}, i=0;

        Bike.loadAll();
        keys = Object.keys(Bike.instances);

        for (i=0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Bike.instances[key].id;
            row.insertCell(-1).textContent = Bike.instances[key].brand;
            row.insertCell(-1).textContent = Bike.instances[key].model;
            row.insertCell(-1).textContent = Bike.instances[key].year;
        }
    }
}