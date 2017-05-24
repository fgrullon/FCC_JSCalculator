$(function() {

    var operation = [];
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $(".total");
    totaldiv.text("0");

    $(".numbers > a").not(".clear").click(function(){
        number += $(this).text();
        
        if(number.length > 15){

            totaldiv.text("Err Length Limit Reach");

        }else if(number.length > 9){

            document.getElementById("total").style.fontSize = "30px";
            totaldiv.text(number);

        }else{
            totaldiv.text(number);
        }
        

    });

    $(".operators > a").not(".equals").click(function(){
        operator = $(this).text();
        newnumber = number;
        operation.push(number);
        operation.push(operator);
        number = "";
        totaldiv.text("0");
    });

    $(".clear").click(function(){
        number = "";
        totaldiv.text("0");
        newnumber = "";
        

    });

    $(".equals").click(function(){
        number = number.slice(0, -1);
        operation.push(number);

        var total  = process_operations(operation).toString();
        total = +total + 0;

        if(total.length > 9){
            document.getElementById("total").style.fontSize = "30px";
            totaldiv.text(total);
        }else{
            totaldiv.text(total);
        }

        operation = [];
        number = "";
        newnumber = "";
    });


}); 


function process_operations(operation){
    
            while(operation.indexOf("*") > 0){
                var index = operation.indexOf("*");
                var total = (+operation[index - 1] * +operation[index + 1]);
                operation.splice(index - 1, 3, total);
                console.log("* : "+operation);
                
            }
            
           while(operation.indexOf("/") > 0){
                var index = operation.indexOf("/");
                var total = (+operation[index - 1] / +operation[index + 1]);
                operation.splice(index - 1, 3, total);
                console.log("/ : "+operation);
                
            }
  
            while(operation.indexOf("+") > 0){
                var index = operation.indexOf("+");
                var total = (+operation[index - 1] + +operation[index + 1]);
                operation.splice(index - 1, 3, total);
                console.log("+ : "+operation);
            }

           while(operation.indexOf("-") > 0){
                var index = operation.indexOf("-");
                var total = (+operation[index - 1] - +operation[index + 1]);
                operation.splice(index - 1, 3, total);
                console.log("- : "+operation);
            }

            return parseFloat(operation).toFixed(2);

}
