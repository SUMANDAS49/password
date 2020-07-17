
//************from here the process of login starts */
function login(){
    let lName=document.getElementById('luname').value
    let lPass=document.getElementById('lupass').value;
    let auth=JSON.parse(localStorage.getItem('auth'));
    if((auth.uname===lName)&&(auth.pass===lPass))
    {
        console.log("successful");
        window.open('contants/my.html')
    }
    else{
        console.log('unsuccessful')
    }

}  
document.getElementById('login').addEventListener('click',login)
/**here the peocess of login ends */