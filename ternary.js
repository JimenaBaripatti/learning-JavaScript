
//result = (a + b < 4)? 'Below' : 'Over';
let login = prompt('Insert login', '')
let message = (login == 'Employee')? 'Hello':
(login == 'Director')? 'Greatings':
(login == '')? 'No login':
 '';
 alert(message)
