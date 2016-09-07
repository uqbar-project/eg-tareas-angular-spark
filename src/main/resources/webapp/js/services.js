"use strict";

app.service("TareasService", function($http) {

	this.findAll = function(successCallback) {
		$http.get("/tareas").success(successCallback);
	};

	this.update = function(tarea, successCallback, onFailCallback) {
		$http.put("/tareas/" + tarea.id, tarea).success(successCallback).error(onFailCallback);
	};
});
