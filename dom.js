//console.log(document.getElementById('display'));
//var inputbox = document.getElementById('display');
//var ops = document.getElementsByClassName('operator');
//var but =document.querySelector('.buttons');
//console.log(but.parentNode);
//but.parentNode.style.backgroundColor = '#000000';
//var btn = document.querySelector('button');
//let x = btn.innerHTML
//alert(x)//

var display = document.getElementById('display');

let displayText = ""


/*var numbers = document.querySelectorAll('button.numbers');

/*for (let i = 0; i< numbers.length; i++){
    var btn = numbers[i]
    console.log(numbers[i]);
    btn.addEventListener('click', numClicked());}

function numClicked(q){
    displayText+=q.innerHTML
    display.value = displayText

}
numbers[0].addEventListener('click', numClicked(numbers[0]));
numbers[1].addEventListener('click', numClicked(numbers[1]));
numbers[2].addEventListener('click', numClicked(numbers[2]));
numbers[3].addEventListener('click', numClicked(numbers[3]));
numbers[4].addEventListener('click', numClicked(numbers[4]));
numbers[5].addEventListener('click', numClicked(numbers[5]));
numbers[6].addEventListener('click', numClicked(numbers[6]));
numbers[7].addEventListener('click', numClicked(numbers[7]));
numbers[8].addEventListener('click', numClicked(numbers[8]));
numbers[9].addEventListener('click', numClicked(numbers[9]));*/

document.body.addEventListener('click', function(event)
{
    if(event.target.classList.contains('numbers') || event.target.classList.contains('operator') || event.target.classList.contains('constant')){
    displayText+=event.target.textContent
    display.value = displayText
    }

    else if(event.target.classList.contains('AC')){
        displayText = ""
        display.value = displayText
    }

    else if(event.target.classList.contains('percentage')){
        displayText = displayText/100
        display.value = displayText
    }

    else if(event.target.classList.contains('DEL')){
        displayText = displayText.slice(0,-1)
        display.value = displayText

    }

    else if(event.target.classList.contains('equals')){

        if(displayText.includes("𝝅") || displayText.includes("*𝝅") || displayText.includes("𝝅*")){

            if(displayText == "𝝅"){
                displayText = "3.14159265359"
                display.value = displayText
                
            }

            else{
                displayText = displayText.replace("*𝝅","*3.14159265359")
                displayText = displayText.replace("𝝅*","3.14159265359*")
                /*displayText = displayText.replace("𝝅","*3.14159265359")*/
                displayText = eval(displayText)
                display.value = displayText

            }

        }

        else if(displayText.includes("e") || displayText.includes("*e") || displayText.includes("e*") ){

            if(displayText == "e"){
                displayText = "2.718281828490"
                display.value = displayText
                
            }

            else{
                displayText = displayText.replace("*e","*2.718281828490")
                displayText = displayText.replace("e*","2.718281828490*")
                /*displayText = displayText.replace("e","*2.718281828490")*/
            
                displayText = eval(displayText)
                display.value = displayText

            }

        }
        else{
        displayText = eval(displayText)
        display.value = displayText

        }

        }

    else if(event.target.classList.contains('square')){

        
        displayText = (eval(displayText))**2
        display.value = displayText

    }

    else if(event.target.classList.contains('root')){
        displayText = (eval(displayText))**(0.5)
        display.value = displayText

    }


    /*function equalTo(){

        if(displayText.includes("𝝅") || displayText.includes("*𝝅")){

            if(displayText == "𝝅"){
                displayText = "3.14159265359"
                display.value = displayText
                
            }

            else{
                displayText = displayText.replace("*𝝅","*3.14159265359")
                displayText = displayText.replace("𝝅","*3.14159265359")
            
                displayText = eval(displayText)
                display.value = displayText

            }

        }*/

        else if(displayText.includes("e") || displayText.includes("*e")){

            if(displayText == "e"){
                displayText = "2.718281828490"
                display.value = displayText
                
            }

            else{
                displayText = displayText.replace("*e","*2.718281828490")
                displayText = displayText.replace("e","*2.718281828490")
            
                displayText = eval(displayText)
                display.value = displayText

            }
        }
        

        
    }

    
    
    )

   
    