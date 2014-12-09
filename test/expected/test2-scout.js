;(function() {
    'use strict';

    var script = document.createElement('script'),
        fScript = document.getElementsByTagName('script')[0],
        baseUrl = '//s3.amazon.com/mysite/mybucket/0.0.0';

    script.src = baseUrl + '/js/grunt-scout.js';
    fScript.parentNode.insertBefore(script, fScript);

    
})();
