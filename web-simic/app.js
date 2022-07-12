    const menu = document.querySelector('#mobile-menu')
    const menuLinks = document.querySelector('.navbar__menu')
    let customAlert = document.getElementById("customAlert");
    // alert('jjj');

    menu.addEventListener('click', ()=>{
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active');
    });

    const formSubmit = (e) =>{
        e.preventDefault();
        alert('eee');
        // customAlert.style.display = "block";
        customAlert.style.display = "none";
    }
    
    