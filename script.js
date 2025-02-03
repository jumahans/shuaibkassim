

const show = document.getElementById('show');
const navigation = document.getElementsByClassName('navigation')[0];




show.addEventListener("click", () => {
    if (navigation.style.display === "none" || navigation.style.display === "") {
        navigation.style.display = 'flex'; 
        navigation.style.margin="2rem";
        navigation.style.backgroundColor='white';
        navigation.style.margin='0';
        navigation.style.color='black';
        navigation.style.fontSize="0.7rem";
        navigation.style.alignItems = 'flex-start';
        navigation.style.margin="2rem";
        show.innerHTML = '<i class="bx bx-x"></i>';   
            } else {
        navigation.style.display = 'none'; 
        show.innerHTML = '<i class="bx bx-menu"></i>';             
    }
});

document.addEventListener('DOMContentLoaded', () =>{
    if(window.innerWidth <= 767){
        navigation.style.display='none';
    }
    else{
        navigation.style.display='flex';
    }
});