/**
 * Created by balate on 25/2/17.
 */
angular.module("cookbook").component("misRecetas", {
    //establecemos la vista del componente
    templateUrl:"views/mis-recetas.html",

    // En controller establecemos la lógica del componente.
    controller: function(ServicioRecetas){

        var self = this;

        // Como 'obtenerRecetas()' retorna una promesa, tengo que
        // pasar un manejador a su funcion 'then()'.
        ServicioRecetas.obtenerRecetas().then(function(respuesta) {

            // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
            self.recetas = respuesta.data;

        });
    }
})