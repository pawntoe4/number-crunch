
var imageElements = [ '#line1no1'];
var timeIntervalVars = {};


$( document ).ready(function() { 
    genNumberSquares(); 

  $(".transition-in").each(function( index ) {
      var squareId = '#' + this.id;
      imageElements.push(squareId);

      setTimeout(function(){
                setNumberSequence(squareId);}, getRandomStartDelay()); 
   });
    setImageInterval();
    addTitleTimouts();

});

function genNumberSquares() {
    for ( var i=0;i<100;i++) {
        $('#innercover').append( '<div class="numbersquare"><div id="square' + i.toString() +'" class="nu-1 transition-in"></div></div>' ); 
    }    
}


function getRandomStartDelay() {
   var num = Math.floor(Math.random() * 1000) + 1  ;
    return num;       
}

function addTitleTimouts() {
    setTimeout(function(){
                setIntroFinalClass("#square42", "letter-N");}, 1800); 
    setTimeout(function(){
                setIntroFinalClass("#square43", "letter-U");}, 1500); 
    setTimeout(function(){
                setIntroFinalClass("#square44", "letter-M");}, 1200); 
    setTimeout(function(){
                setIntroFinalClass("#square45", "letter-B");}, 1300); 
    setTimeout(function(){
                setIntroFinalClass("#square46", "letter-E");}, 1400); 
    setTimeout(function(){
                setIntroFinalClass("#square47", "letter-R");}, 1500); 
    setTimeout(function(){
                setIntroFinalClass("#square49", "letter-C");}, 1600); 
    setTimeout(function(){
                setIntroFinalClass("#square50", "letter-R");}, 1700); 
    setTimeout(function(){
                setIntroFinalClass("#square51", "letter-U");}, 1800); 
    setTimeout(function(){
                setIntroFinalClass("#square52", "letter-N");}, 1300); 
    setTimeout(function(){
                setIntroFinalClass("#square53", "letter-C");}, 1600); 
    setTimeout(function(){
                setIntroFinalClass("#square54", "letter-H");}, 1100);     
}


function setIntroFinalClass( squareId , classname ) {
    var numberclass = getNumberClasses(squareId);
     if ( numberclass != '') {
        $(squareId).removeClass(numberclass)   
     }   
    $(squareId).addClass(classname);
    window.clearInterval(timeIntervalVars[squareId])
    delete timeIntervalVars[squareId];
    
}

function setNumberSequence( id ) {
    var seqInterval = setInterval(
            function(){   
                            var isHidden = $(id).hasClass("number-hidden");
                            if ( isHidden === true) {
                                $(id).removeClass("number-hidden"); 
                                var numberclass = getNumberClasses(id);
                                if ( numberclass != '') {
                                    $(id).removeClass(numberclass)   
                                }
                                var nextnum = getRandomNumberClass();
                                $(id).addClass(nextnum);
                                
                            }
                            else {
                                $(id).addClass("number-hidden");
                            }
                        }, 150);
    var object
    timeIntervalVars[id] = seqInterval;
}

function setImageInterval( ) {
    var seqInterval = setInterval(
            function(){   
                        var elementId  = imageElements[getRandomNumber(0 , imageElements.length)]
                            var isHidden = $(elementId).hasClass("number-hidden");
                            if ( isHidden === true) {
                                $(elementId).removeClass("number-hidden"); 
                                var numberclass = getNumberClasses(elementId);
                                if ( numberclass != '') {
                                    $(elementId).removeClass(numberclass)   
                                }
                                var nextnum = getRandomNumberClass();
                                $(elementId).addClass(nextnum);
                                
                            }
                            else {
                                $(elementId).addClass("number-hidden");
                            }
                        }, 10);
}

function getRandomNumber( lower , upper){
    var num = Math.floor(Math.random() * upper) + lower  ;
    return num;  
}    
    
function getRandomNumberClass  () {
    var num = Math.floor(Math.random() * 9) + 0  ;
    return "nu-" +num.toString();
}

function getNumberClasses (id) {
    var classname = "";
    var classList = $(id).attr("class").toString().split( " ");
    $.each(classList, function(index, item) {
        if (item.indexOf('nu-') > -1 ) {
            classname = item;
        }
    });
    return classname; 
}

function clearResources () {
    for ( var i in timeIntervalVars ){
       window.clearInterval(i);
    }
    while (timeIntervalVars.length > 0) {
    timeIntervalVars.pop();
    } 
}
$(window).unload(function(){
    clearResources();
});






