var round = function(text, pos) {
    function setCharAt(str,index,chr) {
       if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    if (text.length > pos) {
        for (i=1;i<text.length;i++){
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos],10) >= 5) {
                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
                } else {
                    text = text.substr(0,pos);
                }
            } 
        }
    }
    return text;
};


var $ = jQuery.noConflict();
$(function() {

    function lengthLimit(number){
        if(number > 9){
            totaldiv.text(number.substr(number.length-9,9));
        }
    }

    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		lengthLimit(number);
    });
    
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });

    $("#clear").click(function(){
		number = "";
		totaldiv.text("0");
        newnumber = "";

    });

    $("#equals").click(function(){
        number = parseInt(number, 10);
        newnumber = parseInt(newnumber,10);

		if (operator === "+"){

			number = (newnumber + number).toString(10);

		} else if (operator === "-"){

			number = (newnumber - number).toString(10);

		} else if (operator === "/"){

			number = (newnumber / number).toString(10);

		} else if (operator === "*"){

			number = (newnumber * number).toString(10);

		}

        if(number.length <= 9){
            totaldiv.text(number);
        }
         if(number.length <= 20){
            totaldiv.text(number).fontSize = "20px";

        }
		
		lengthLimit(number);
		number = "";
		newnumber = "";
    });


}); 
