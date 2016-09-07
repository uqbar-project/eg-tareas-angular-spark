var Tarea = function() {

};


Tarea.prototype.cumplir = function() {
	this.porcentajeCumplimiento = 100;
};

Tarea.prototype.estaCumplida = function() {
	return this.porcentajeCumplimiento === 100;
}