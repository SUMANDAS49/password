//information regarding new register.......
function register(){
    let uname=document.getElementById('Runame').value
    let mail=document.getElementById('Rmail').value
    let pass=document.getElementById('Rpass').value
    let data={};
    data.uname=uname;
    data.mail=mail;
    data.pass=pass;
    console.log(data);//it has to be removed after complition for security reason....****
    localStorage.setItem('auth',JSON.stringify(data));
    document.getElementById('Runame').value='';
    document.getElementById('Rmail').value='';
    document.getElementById('Rpass').value='';

}
document.getElementById('registerButton').addEventListener('click',register)


//information regarding new register.......ends here
