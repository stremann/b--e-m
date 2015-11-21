'use strict';

module.exports = function() {
    return {
        develop: {
            tasks: [
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
