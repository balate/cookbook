/**
 * Created by balate on 25/2/17.
 */

angular.module("cookbook").directive("formularioAlta", function () {

    return {
        //con restrict, indicamos como vamos a usar la directia con A como atributo y con E la usamos como el propio
        // elemento
        restrict: "EA",

        //template o templateUrl indicamos la jerarquia de componentes que el navegador va a a renderizar como vista de la directiva
        templateUrl: "views/formulario-alta.html",

        //Con scope definimos la interfaz de comunicación entre la directiva y el scope padre (controlaador / componentes))
        scope:{

            alHacerClick: "&" //con & notificamos eventos al controlador padre
        },

        //con link establecemos la lógica de la directiva y ademas podemos hacer manipulación del DOM de a visata
        link: function(scope){

            //Manejador del botón 'Aceptar
            scope.notificarTexto = function(){
                //'notificar hacia fuera (hacia el controlador padre).
                scope.alHacerClick({texto: scope.texto});
            };

        }
    };
});