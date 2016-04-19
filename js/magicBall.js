(function () {
    var boxShadowBrows = getBrowserSupport(['boxShadow', 'MozBoxShadow', 'WebkitBoxShadow']); //box-shadow for diffrent browsers (crome, firefox, safari):
    
    var magicBall;
    var txt;
            
    //Array
    var list = ["Du blir millionær i morgen", "Du blir 120 år gammel", "Du har ein tvilling du en dag møter", "Du kjem til å bygge ditt eget hus", "Du vil reise jorda rundt, fleire gongar."];
    
    var init = function () {
          
        var setHTMLObjects = function () {
            magicBall = document.getElementById("magicBall");
            txt = document.getElementById("txt");
                
            document.body.style.backgroundColor = "rgb(0, 0, 0)"; //Style <body>
                
        }();
        /*end setHTMLObjects*/
          
        var setEvents = function () {
            setDefaultGlow();
            magicBall.onclick = setRandomTxt;
            magicBall.onmouseover = setMoreGlow;
            magicBall.onmouseout = setDefaultGlow;
        }();
        /*----end setEvents----*/
        
    }();
    /*----end init----*/
    
    var setMagicBallStyle = function () {
        magicBall.style.width = "750px";
        magicBall.style.height = "800px";
        magicBall.style.borderRadius = "50%";
        magicBall.style.margin = "auto";
        magicBall.style.backgroundColor = "rgb(75, 0, 130)";
    }();
    /*----end setMagicBallStyle----*/
            
    var setTxtStyle = function () {
        txt.style.height = "500px";
        txt.style.borderRadius = "50%";
        txt.style.fontSize = "60px";
        txt.style.textAlign = "center";
        txt.style.paddingTop = "300px";
        txt.style.paddingLeft = "20px";
        txt.style.paddingRight = "20px";
        txt.style.color = "rgb(255, 255, 255)";
        txt.style.fontFamily = "'Architects Daughter', cursive";
    }();
    /*----end setTxtStyle----*/
    
    /*----getBrowserSupport----*/
    function getBrowserSupport(diffBrows) {
        var root = document.documentElement; //Gets the root element
        
        for (var i = 0; i < diffBrows.length; i++){ //Loop through possible properties
            if (diffBrows[i] in root.style){ //If property exists
                return diffBrows[i] //Return the string
            }
        }
    }
    /*----end getBrowserSupport----*/
            
    function setDefaultGlow(){
        magicBall.style[boxShadowBrows] = "0px 0px 200px 0px rgb(255, 226, 13)"; //box-shadow with support for diffrent browsers 
        document.getElementById("txt").innerHTML = "Klikk på meg for å sjå din skjebne";
    }
    /*----end setDefaultGlow----*/
            
    function setMoreGlow(){
        magicBall.style[boxShadowBrows] = "0px 0px 200px 40px rgb(255, 226, 13)";
    }
    /*----end setMoreGlow----*/
            
    function setRandomTxt(){
        var listOfTxt = list[Math.floor(Math.random() * list.length)];
        document.getElementById("txt").innerHTML = listOfTxt;
    }
    /*----end setRandomColor----*/

}()); 