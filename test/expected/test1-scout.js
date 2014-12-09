;(function() {
    'use strict';

    var script = document.createElement('script'),
        fScript = document.getElementsByTagName('script')[0],
        baseUrl = '//s3.amazon.com/mysite/mybucket/0.0.0';

    script.src = baseUrl + '/js/grunt-scout.js';
    fScript.parentNode.insertBefore(script, fScript);

    
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('link');

    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = baseUrl + '/css/grunt-scout.css';
    head.appendChild(style);
    
})();
