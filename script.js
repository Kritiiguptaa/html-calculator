let screen= document.getElementById('answer');
buttons=document.querySelectorAll('button');
removeButton=document.getElementById('removeButton');
var result;

let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText== 'x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='Clear All'){
            screenValue="";
            screen.value = screenValue;
        }
        else if(buttonText== '='){
            screen.value= eval(screenValue);
        }
        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
removeButton.addEventListener('click',(e)=>{
    screenValue = screenValue.slice(0, -1);
    // screen.value = screen.value.slice(0,-1);
    screen.value = screenValue;
})
function screenResult(){
    result=eval(screenValue);
    screen.value = result;
}
screen.onkeydown = function(event) {
    event.key=event.target.innerText;
    console.log('event.key is',event.key);
    // Only allow if the e.key value is a number or if it's 'Backspace'
      if(isNaN(event.key) && event.key !== 'Backspace' && event.key !=='Enter' && event.key !=='+' && event.key !=='-' && event.key !=='*' && event.key !=='/' && event.key !=='=' && event.key !=='.' && event.key !=='ArrowLeft' && event.key !=='ArrowRight') {
        event.preventDefault();
      }
    

    else if(event.key=='1') {
        screenValue += event.key;
        // screen.value = screenValue;
    }
    else if(event.key=='2') {
        screenValue += event.key; 
        // screen.value = screenValue;
 
        
    }
    else  if(event.key=='3') {
        screenValue += event.key; 
        // screen.value = screenValue;
    }
    
    // else if(event.key=='backspace'){
    //     screenValue = screenValue.slice(0, -1);
    //     event.key = screenValue;
    // }
    else  if(event.key=='4') {
        screenValue += event.key; 
        // screen.value = screenValue;

        
    }
    else  if(event.key=='5') {
        screenValue += event.key; 
        
    }
    else  if(event.key=='6' && event.shiftKey == false) {
        screenValue += event.key; 
        
    }
    else  if(event.key=='7') {
        screenValue += event.key; 
        
    }
    else  if(event.key==8 && event.shiftKey == false) {
        screenValue += event.key; 
    }
    else  if(event.key==9) {
        screenValue += event.key; 
    }
    else  if(event.key==0) {
        screenValue += event.key;
    }
    else if(event.key=='.'){
        screenValue += event.key; 
        // screen.value = screenValue;
    }
    
    else if(event.key=='*'){
        screenValue += event.key; 
        // screen.value = screenValue;
    }
    else if(event.key=='/'){
        screenValue += event.key; 
        // screen.value = screenValue;
    }
    else if(event.key=='+'){
        screenValue += event.key; 
        // screen.value = screenValue;
    }
    else if(event.key=='-'){
        screenValue += event.key; 
        // screen.value = screenValue;
    }
else if(event.key=='Enter'|| event.key=='='){
    screen.value= eval(screenValue);
}
else if(event.key=='Backspace'){
    screenValue = screenValue.slice(1, -1);
    screen.value = screenValue;
}
};
