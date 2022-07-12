const readbtn = document.querySelector('.readmorebtn');
const text = document.querySelector('.text');
const readbtn1 = document.querySelector('.readmorebtn1');
const text1 = document.querySelector('.text1');

readbtn1.addEventListener('click',(e)=>{
    text1.classList.toggle('showmore1');
    if(readbtn1.innerText=== 'Read More'){
        readbtn1.innerText = 'Read Less';
    }
    else{
        readbtn1.innerText = 'Read More';
    }

})
readbtn.addEventListener('click',(e)=>{
    text.classList.toggle('showmore');
    if(readbtn.innerText=== 'Read More'){
        readbtn.innerText = 'Read Less';
    }
    else{
        readbtn.innerText = 'Read More';
    }

})