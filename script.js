'use strict';
// Vadidate Email

const form =document.querySelector('.form');
form.classList.remove('hidden');

const email = document.getElementById('email');
const iconSuccess = document.querySelector('.iconSuccess');
const iconError = document.querySelector('.iconError');
const errorText = document.querySelector('.form-text');
const errorMessage = document.querySelector('.error-message');
const btnSubmit = document.querySelector('.btn-submit');
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

errorText.classList.remove('hidden');
errorMessage.classList.add('hidden');

btnSubmit.addEventListener('click',function(){
    checkEmail();
    if(email.value.match(regex)){
        infoContent.classList.remove('hidden');
        overlay.classList.remove('hidden');
        form.classList.add('hidden');
    }
});

function checkEmail(){
    if(email.value.match(regex)){
        email.style.borderColor = '#2ecc71';
        email.style.backgroundColor = '#a7f7c8';
        iconError.style.display = 'none';
        iconSuccess.style.display = 'block';
        errorText.classList.add('hidden');
    }else{
        email.style.borderColor = '#e74c3c';
        email.style.backgroundColor = '#fceae9';
        iconError.style.display = 'block';
        iconSuccess.style.display = 'none';
        errorText.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        errorMessage.style.color = '#e74c3c';

    }if(email.value === ''){
        iconError.style.display = 'none';
        iconSuccess.style.display = 'none';
        errorText.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        errorText.style.color = '#e74c3c';
    }
}
// info box hidden
function closeBox(){
    infoContent.classList.add('hidden');
    overlay.classList.add('hidden');
    form.classList.remove('hidden');
    email.value ='';
    email.style.borderColor = '';
    email.style.backgroundColor = '';
    errorText.classList.remove('hidden');
    errorText.style.color = '';
    iconSuccess.style.display = 'none';
}
const btnClose = document.querySelector('.close');
const infoContent = document.querySelector('.info-content');
const overlay = document.querySelector('.overlay');

btnClose.addEventListener('click',closeBox);
overlay.addEventListener('click',closeBox);


//Creat view more

const btnMore = document.querySelectorAll('.more');
// btnMore.addEventListener('click',function(){
//     btnMore.parentNode.classList.toggle('active');    
// })

for(let i = 0; i< btnMore.length; i++){
    btnMore[i].addEventListener('click', function(){
    btnMore[i].parentNode.classList.toggle('active')
    })
}

const btnViewMore = document.querySelector('.btn-more');
const btnViewLess = document.querySelector('.btn-less');
const contentHidden = document.querySelector('.content');

// HOBBY 
const hobbyShow = document.querySelector('.hobby');
hobbyShow.addEventListener('mouseover', mouseOver);
hobbyShow.addEventListener('mouseout', mouseOut);
hobbyShow.addEventListener('click', clickEvent);

function mouseOver(){
    btnViewMore.style.display = 'flex';
}
function mouseOut(){
    btnViewMore.style.display = 'none';    
}
function clickEvent(){
    btnViewMore.style.display = 'flex';    
}
btnViewMore.addEventListener('click', function(){ 
    hobbyShow.removeEventListener('mouseover', mouseOver);   
    btnViewMore.parentNode.classList.toggle('active');
    contentHidden.classList.remove('hidden');
    btnViewMore.style.display = 'none';
    btnViewLess.style.display = 'flex';
    hobbyShow.style.height = 'auto';    
});

btnViewLess.addEventListener('click', function(){  
    btnViewLess.parentNode.classList.toggle('active');
    btnViewLess.style.display = 'none';
    contentHidden.classList.add('hidden');
    hobbyShow.style.height = '180px';
    btnViewMore.style.display = 'none';
    hobbyShow.addEventListener('mouseover', mouseOver);
});

// //LANGUAGE
const languageShow = document.querySelector('.language');
const btnViewMore1 = document.querySelector('.btn-more1');
const btnViewLess1 = document.querySelector('.btn-less1');
const content1Hidden = document.querySelector('.content1');
languageShow.addEventListener('mouseover', mouseOver1);
languageShow.addEventListener('mouseout', mouseOut1);
languageShow.addEventListener('click', clickEvent1);

function mouseOver1(){
    btnViewMore1.style.display = 'flex';
}
function mouseOut1(){
    btnViewMore1.style.display = 'none';    
}
function clickEvent1(){
    btnViewMore1.style.display = 'flex';    
}

btnViewMore1.addEventListener('click', function(){ 
    languageShow.removeEventListener('mouseover', mouseOver1);   
    btnViewMore1.parentNode.classList.toggle('active');
    content1Hidden.classList.remove('hidden');
    btnViewMore1.style.display = 'none';
    btnViewLess1.style.display = 'flex';
    languageShow.style.height = 'auto';    
});

btnViewLess1.addEventListener('click', function(){  
    btnViewLess1.parentNode.classList.toggle('active');
    btnViewLess1.style.display = 'none';
    content1Hidden.classList.add('hidden');
    languageShow.style.height = '180px';
    btnViewMore1.style.display = 'none';
    languageShow.addEventListener('mouseover', mouseOver1);
});

//SKILL
const skillShow = document.querySelector('.skill');
const btnViewMore2 = document.querySelector('.btn-more2');
const btnViewLess2 = document.querySelector('.btn-less2');
const content2Hidden = document.querySelector('.content2');
skillShow.addEventListener('mouseover', mouseOver2);
skillShow.addEventListener('mouseout', mouseOut2);
skillShow.addEventListener('click', clickEvent2);

function mouseOver2(){
    btnViewMore2.style.display = 'flex';
}
function mouseOut2(){
    btnViewMore2.style.display = 'none';    
}
function clickEvent2(){
    btnViewMore2.style.display = 'flex';    
}

btnViewMore2.addEventListener('click', function(){ 
    skillShow.removeEventListener('mouseover', mouseOver2);   
    btnViewMore2.parentNode.classList.toggle('active');
    content2Hidden.classList.remove('hidden');
    btnViewMore2.style.display = 'none';
    btnViewLess2.style.display = 'flex';
    skillShow.style.height = 'auto';    
});

btnViewLess2.addEventListener('click', function(){  
    btnViewLess2.parentNode.classList.toggle('active');
    btnViewLess2.style.display = 'none';
    content2Hidden.classList.add('hidden');
    skillShow.style.height = '180px';
    btnViewMore2.style.display = 'none';
    skillShow.addEventListener('mouseover', mouseOver2);
});
// creat button back to top
const btnTop = document.querySelector('.btn-toTop');
window.onscroll = function(){
    backTop()
};
function backTop(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        btnTop.style.display = 'block';
    }else{
        btnTop.style.display = 'none';
    }
}
btnTop.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
})