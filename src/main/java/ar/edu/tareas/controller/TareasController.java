package ar.edu.tareas.controller;

import java.util.List;

import spark.Spark;
import ar.edu.tareas.controller.util.JsonTransformer;
import ar.edu.tareas.domain.Tarea;
import ar.edu.tareas.repos.RepoTareas;

public class TareasController {

	private JsonTransformer jsonTransformer;
	
	public TareasController(JsonTransformer jsonTransformer) {
		this.jsonTransformer = jsonTransformer;
	}
	
	public void register() {

		Spark.get("/tareas", (request, response) -> {
			List<Tarea> tareas = RepoTareas.getInstance().tareasPendientes();
			response.type("application/json;charset=utf-8");
			return tareas;
		}, this.jsonTransformer);
	}
}
