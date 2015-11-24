'use strict';

var express = require( 'express' );
var app = express();
var path = require ( 'path' );

app.set( 'port', ( process.env.PORT || 3000 ) );

app.use( express.static( __dirname + '/public' ) );
app.use( '/bower',  express.static( path.join( __dirname, 'vendor/bower' ) ) );

app.set( 'views', __dirname + '/public' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( request, response ) {
    response.render( 'index' );
} );

app.listen( app.get( 'port' ), function() {
    console.log( 'Node app is running on port', app.get( 'port' ) );
} );
