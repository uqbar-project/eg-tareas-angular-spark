"use strict";

var app = angular.module("tareasApp", []);

app.controller("TareasController", function(TareasService) {

	var self = this;
	this.tareas = [];

	this.getTareas = function() {
		TareasService.findAll(function(data) {
			self.tareas = _.map(data, function(protoTarea) {
				return angular.extend(new Tarea(), protoTarea);
			});
		});
	};

	this.cumplir = function(tarea) {
		tarea.cumplir();
		TareasService.update(tarea, function() {
			self.getTareas();
		}, notificarError);
	};

	this.errors = [];

	function notificarError(mensaje) {
		self.getTareas();
		self.errors.push(mensaje);
		$timeout(function() {
			while (self.errors.length > 0) {
				self.errors.pop();
			}
		}, 10000);
	};


	this.getTareas();

});

