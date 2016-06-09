# Laravel PHP Framework using Angular.js

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

## Personal Documentation

This is a simple application using Laravel 5 and Angular.js. The style is based on bootstrap. Using gulp to create css and js files. The application contains a dynamic navigation menu and a login function to a private page. To simplfy the task it is only the login function related to the database. The content is fixed.


## Install

It is already included in the project. Just a little documentation what kind of components were been created:

composer create-project laravel/laravel test_laravel_angular

cd public

bower init

bower install angular --save

bower install angular-route --save

bower install angular-cookies --save

bower install bootstrap --save

bower install bootstrap-sass --save

cd ..

npm install laravel-elixir --save

npm install gulp --save

## Configuration

Define the DB connection in .env File and run:

php artisan migrate:install

php artisan migrate

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
