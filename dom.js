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
    if(event.target.classList.contains('numbers') || event.target.classList.contains('operator')){
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
        displayText = eval(displayText)
        display.value = displayText

    }

    
    
}    )

   
    