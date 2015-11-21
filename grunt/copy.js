'use strict';

module.exports = function( grunt ) {
    return {
        html: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.html.src' ),
                    dest: grunt.config( 'copy.html.dest' ),
                    src: [ '**/*.ejs' ]
                }
            ]
        },
        css: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.css.src' ),
                    dest: grunt.config( 'copy.css.dest' ),
                    src: [ '*.css' ]
                }
            ]
        },
        images: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.images.src' ),
                    dest: grunt.config( 'copy.images.dest' ),
                    src: [ '**/*.jpg' ]
                }
            ]
        },
        favicon: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.favicon.src' ),
                    dest: grunt.config( 'copy.favicon.dest' ),
                    src: [ 'favicon.ico' ]
                }
            ]
        }

    };
};
