//for(i=2; i <= 10; i++){
 //   if (i % 2 != 0) continue;
  //  alert(i)}

let i = 0
while(i<3){
    
    alert(`number ${i}!`);
    i++;
}


let num
do {
    num = prompt('Enter a number greater than 100', 0);

} while (num <= 100 && num);

let browser
if(browser == 'Edge'){
    alert( "You've got the Edge!" );
}
else if(browser == 'Chrome' 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera' ) {
    alert( 'Okay we support these browsers too' )
}
else{
    alert( 'We hope that this page looks ok!' )
};
    
