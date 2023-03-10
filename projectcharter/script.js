'use strict';

const goalEl = document.querySelector('.goals');
const scopeEl = document.querySelector('.scopes');
const teamEl = document.querySelector('.team');
const primaryEl = document.querySelector('.primary');
const timelineEl = document.querySelector('.timeline');

goalEl.addEventListener('mouseover',function(){
    goalEl.style.backgroundColor = 'rgb(247, 215, 175)';
    goalEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = 'none';
    teamEl.style.boxShadow = 'none';
    primaryEl.style.boxShadow = 'none';
    timelineEl.style.boxShadow = 'none';
})

goalEl.addEventListener('mouseout',function(){
    goalEl.style.backgroundColor = 'rgb(250, 230, 204)';
    goalEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    primaryEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    timelineEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
})

teamEl.addEventListener('mouseover',function(){
    teamEl.style.backgroundColor = 'rgb(247, 215, 175)';
    teamEl.style.boxShadow = '0 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = 'none';
    goalEl.style.boxShadow = 'none';
    primaryEl.style.boxShadow = 'none';
    timelineEl.style.boxShadow = 'none';
})

teamEl.addEventListener('mouseout',function(){
    teamEl.style.backgroundColor = 'rgb(250, 230, 204)';
    teamEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    goalEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    primaryEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    timelineEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
})
scopeEl.addEventListener('mouseover',function(){
    scopeEl.style.backgroundColor = 'rgb(247, 215, 175)';
    scopeEl.style.boxShadow = ' 10px 10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = 'none';
    goalEl.style.boxShadow = 'none';
    primaryEl.style.boxShadow = 'none';
    timelineEl.style.boxShadow = 'none';
})

scopeEl.addEventListener('mouseout',function(){
    scopeEl.style.backgroundColor = 'rgb(250, 230, 204)';
    scopeEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    goalEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    primaryEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    timelineEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
})
primaryEl.addEventListener('mouseover',function(){
    primaryEl.style.backgroundColor = 'rgb(247, 215, 175)';
    primaryEl.style.boxShadow = '0 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = 'none';
    goalEl.style.boxShadow = 'none';
    teamEl.style.boxShadow = 'none';
    timelineEl.style.boxShadow = 'none';
})

primaryEl.addEventListener('mouseout',function(){
    primaryEl.style.backgroundColor = 'rgb(250, 230, 204)';
    primaryEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    goalEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    timelineEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
})
timelineEl.addEventListener('mouseover',function(){
    timelineEl.style.backgroundColor = 'rgb(247, 215, 175)';
    timelineEl.style.boxShadow = ' -10px -10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = 'none';
    goalEl.style.boxShadow = 'none';
    primaryEl.style.boxShadow = 'none';
    scopeEl.style.boxShadow = 'none';
})

timelineEl.addEventListener('mouseout',function(){
    timelineEl.style.backgroundColor = 'rgb(250, 230, 204)';
    timelineEl.style.boxShadow = ' 5px 10px 10px rgba(0,0,0,.5)';
    teamEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    goalEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    primaryEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
    scopeEl.style.boxShadow = '5px 10px 10px rgba(0,0,0,.5)';
})
window.addEventListener('click',function(){
    this.window.location.href = 'https://tttl96.github.io/';
})
