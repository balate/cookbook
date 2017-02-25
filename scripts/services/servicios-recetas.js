/**
 * Created by balate on 22/2/17.
 */
angular.module("cookbook").service("ServicioRecetas", function($http){
   //toda funcionalidad que quieras exponer hacia afuera, tiene que estar publicada en this (para llamarla desde fuera)

    //obtenemos la collecion de recetas.
    this.obtenerRecetas = function(){
        return $http.get("http://127.0.0.1:8000/api/recetas");
    };

    //guardamos la receta
    this.guardarReceta = function(receta){
        return $http.post("http://127.0.0.1:8000/api/recetas", receta);
    }
});