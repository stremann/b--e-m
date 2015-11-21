'use strict';

module.exports = function( grunt ) {
    return {
        index: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.index.src' ),
                    dest: grunt.config( 'copy.index.dest' ),
                    src: [ '*.ejs' ]
                }
            ]
        },
        html: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.html.src' ),
                    dest: grunt.config( 'copy.html.dest' ),
                    src: [ '**' ]
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
        img: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.img.src' ),
                    dest: grunt.config( 'copy.img.dest' ),
                    src: [ '**' ]
                }
            ]
        },
        ico: {
            files: [
                {
                    expand: true,
                    cwd: grunt.config( 'copy.ico.src' ),
                    dest: grunt.config( 'copy.ico.dest' ),
                    src: [ '*.ico' ]
                }
            ]
        }

    };
};
