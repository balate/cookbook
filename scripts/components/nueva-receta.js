/**
 * Created by balate on 26/2/17.
 */

angular.module("cookbook").component("nuevaReceta",{
    //con bindings establecemos la interfaz de comunicacion del componente.Solicitamos el enlace de $router que
    //lo hace automaticamente Angular en el ngOutlet
    bindings:{
        $router:"<"
    },
    templateUrl: "views/nueva-receta.html",

    controller: function(ServicioRecetas){

        //guardamos la referencia del componente
        var self = this;

        // Guardamos la receta.
        self.guardarReceta = function(texto) {
            var receta = { nombre: texto };

            ServicioRecetas
                .guardarReceta(receta)
                .then(function(respuesta) {
                    //$router tiene los datos relacionados con la ruta que se esta navegando. puedo ejecutar su fucncion 'navigate()' para hacer redireción.
                    self.$router.navigate(["MisRecetas"]);
            });
        };
    }
});

