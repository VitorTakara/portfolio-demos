    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

$(document).ready(function(){

// Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

function setContactBackgroundColor(color){
    document.getElementById("NossosDiferenciais").style.backgroundColor = color;
}

if(!isIE && !isSafari && !isEdge && !isOpera && !isFirefox && !isChrome){
    setContactBackgroundColor("#ff780c");
}else{

if(isEdge || isFirefox || isIE || isSafari || isOpera){
    setContactBackgroundColor("#ff7212");
} 

if(isChrome){
    setContactBackgroundColor("#ff780c");
} 
    
}
    
    });


