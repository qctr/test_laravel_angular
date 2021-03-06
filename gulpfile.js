var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 /*
  * Modify the scripts by gulp
  * @author: Quoc Tri Tran
  */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
    	'app.js'
    ], 'public/js/app.js');

    mix.scripts([
    	'controllers/globalController.js',
    	'controllers/navController.js',
    	'controllers/userController.js',
    ], 'public/js/controllers.js');

    mix.scripts([
    	'models/userModel.js'
    ], 'public/js/models.js');

    mix.version([
    	'js/app.js',
    	'js/controllers.js',
    	'js/models.js'
    ]);
});
