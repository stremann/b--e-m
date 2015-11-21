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
        fonts: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.fonts.src' ),
                    dest: grunt.config( 'copy.fonts.dest' ),
                    src: [ '*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2' ]
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
