'use strict';

module.exports = function() {
    return {
        develop: {
            tasks: [
                'githooks',
                'watch:css',
                'watch:html'
            ],
            options: {
                limit: 3,
                logConcurrentOutput: true
            }
        }
    };
};
