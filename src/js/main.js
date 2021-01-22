
//importing modules to:
requirejs.config({ baseUrl: "./js"});


//entry point
requirejs(["router"], function (router) {
    $(document).ready(router.init);
});