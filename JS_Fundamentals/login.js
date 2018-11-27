let login = prompt('Please insert your login','')
if(login == false){
    alert('Canceled')} 
else if(login == 'Admin'){
    let password = prompt('Insert your password',null)
    if (password == false) {
        alert('Canceled')
    }
    else if (password == 'TheMaster'){
        alert('Welcome!')
    }
    else { alert('Wrong password')
    } 
}
else { alert(`I don't know you`)
}
