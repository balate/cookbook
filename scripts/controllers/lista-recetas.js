/**
 * Created by balate on 22/2/17.
 */
angular.module("cookbook")
        .controller("ListaRecetas", function($scope, ServicioRecetas){

        // Como 'obtenerRecetas()' retorna una promesa, tengo que
        // pasar un manejador a su funcion 'then()'.
        ServicioRecetas.obtenerRecetas().then(function(respuesta) {
            // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
            $scope.recetas = respuesta.data;
        });

        // Guardamos la receta.
        $scope.guardarReceta = function(texto) {
            var receta = { nombre: texto };
            ServicioRecetas.guardarReceta(receta).then(function(respuesta) {
                $scope.recetas.push(respuesta.data);
            });
        };
});