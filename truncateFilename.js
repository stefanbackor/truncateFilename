var trim=function(trimThis){
    return trimThis ? trimThis.replace(/^\s+|\s+$/g,"") : trimThis;
};

var testIfFilename=function(testThis){
    var dot=testThis.lastIndexOf(".");
    return 0<dot && 5>=testThis.length-dot && testThis.length!=dot+1;
};

var truncateFilename=function(truncThis,afterLength,ending){
    truncThis=trim(truncThis);
    ending=trim(ending);
    if(afterLength||(afterLength=12), ending||(ending="...")) {}
    if(afterLength&&truncThis.length<=afterLength)
        return truncThis;
    afterLength=Math.max(afterLength-ending.length,0);
    if(testIfFilename(truncThis)){
        var dot=truncThis.lastIndexOf(".");
        var truncatedString="";
        afterLength=Math.max(afterLength-truncThis.substr(dot).length,0);
        truncatedString+=truncThis.substr(0,dot).substr(0,Math.ceil(afterLength/2));
        truncatedString+=ending;
        truncatedString+=truncThis.substr(0,dot).substr(0-Math.floor(afterLength/2));
        truncatedString+=truncThis.substr(dot);
        return truncatedString;
    }
    return truncThis.substr(0,afterLength)+ending;
};

if (typeof (exports) !== "undefined") {
    if (typeof (module) !== "undefined" && module.exports) {
        exports = module.exports = truncateFilename;
    }
    exports.truncateFilename = truncateFilename;
}