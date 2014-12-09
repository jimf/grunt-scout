;(function() {
    'use strict';

    var script = document.createElement('script'),
        fScript = document.getElementsByTagName('script')[0],
        baseUrl = '<%= baseUrl %>/<%= buildNumber %>';

    script.src = baseUrl + '<%= jsPath %>';
    fScript.parentNode.insertBefore(script, fScript);

    <% if (typeof cssPath !== 'undefined') { %>
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('link');

    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = baseUrl + '<%= cssPath %>';
    head.appendChild(style);
    <% } %>
})();
