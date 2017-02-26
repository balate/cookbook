/**
 * Created by balate on 21/2/17.
 */
//module setter
angular.module("cookbook", ["ngComponentRouter"]);

//configuramos el proveedor locationProvider
//establecemos el modo de navegación HTML5 para que funcione el single page application
angular.module("cookbook").config(function($locationProvider){
    $locationProvider.html5Mode(true);
});

// En el value '$routerRootComponent' indicamos el componente raiz.
angular.module("cookbook").value("$routerRootComponent", "raiz");

