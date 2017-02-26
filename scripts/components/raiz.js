/**
 * Created by balate on 26/2/17.
 */
angular.module("cookbook").component("raiz", {
    $routeConfig:[{
        name: "MisRecetas",
        path: "/mis-recetas",
        component: "misRecetas"
    },{
        name: "NuevaReceta",
        path: "/nueva-recetas",
        component: "nuevaReceta",
}],
    templateUrl: "views/raiz.html"
});
