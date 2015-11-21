'use strict';

module.exports = function( grunt ) {
    return {
        css: {
            files: [
                grunt.config( 'watch.css.pattern' )
            ],
            tasks: [ 'compass:watch' ],
            options: {
                spawn: false
            }
        },
        html: {
            files: [
                grunt.config( 'watch.html.pattern' )
            ],
            tasks: [ 'copy:html' ],
            options: {
                spawn: false
            }
        }
    };
};
