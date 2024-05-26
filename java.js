
function calc() {

	var res = 0;
	n1 = parselnt(document.getElementById("n1").value);
	n2 = parselnt(document.getElementById("n2").value);
    
    switch (document.getElementById("op").value) {
    	case "+":
    	res = n1 + n2; 
    	break;
    	case "-":
    	res = n1 - n2; 
    	break;
    	case "*":
    	res = n1 * n2; 
    	break;
    	case "/":
    	res = n1 / n2; 
    	break;
    	default:
    	res = "ERROR";
    	break;
    }

   document.getElementById("result").innerHTML = "The result = <br>" + res + "</br>";

}