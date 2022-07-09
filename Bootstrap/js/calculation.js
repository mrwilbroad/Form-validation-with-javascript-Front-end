let count = 0;  //declare count as global variable
function changebackgrund() {
    
    const color = [
        "green",
        "yellow",
        "white",
        "black",
        "orange"
    ];

    let colorlengt = color.length;
    if(count > colorlengt) {
        count = 0;
    }
    let bdy = document.body;
    bdy.style.cssText = "background-color:" + color[count]; 

    // alternative to change background-color
    // bdy.style.background = color[count]; 
    count++;
}


function val(event) {
    event.preventDefault();

    const form = document.querySelector("form");
    var fnumber = form.fnumber.value;
    var Snumber = form.snumber.value;

    
    
  
    if(isNaN(fnumber) || isNaN(Snumber) || fnumber == "" || Snumber == "") {
        alert("please insert number");
        
    }else {
         fnumber = Number(fnumber);
         Snumber = Number(Snumber);
        let operator = form.operator.value;
       
        if(operator == "0") {
            alert("please choose operator")
        }
     
        let answer ;

        switch(operator) {
            case 'addition':
                answer = (fnumber + Snumber);
                break;
            case 'division':
                answer = (fnumber / Snumber);    
                break;
            case 'multiplicaton':
                answer = (fnumber * Snumber);    
                break; 
            case 'substraction':
                answer = (fnumber - Snumber);    
                break;            
            default:
                answer = 'wrong operation selected';
                break;    
        }
        let btn = document.querySelector(".Answer");
        btn.innerHTML = "Answer is :" + answer;
    }

   
}