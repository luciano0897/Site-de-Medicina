const mn = document.querySelector('.menu nav ul');

const menu = () =>{
    if ( mn.style.display == 'flex'){
       mn.style.display = 'none';
    }else{
       mn.style.display = 'flex';
    }

}
document.querySelector('.menuMobile').addEventListener("click", menu)