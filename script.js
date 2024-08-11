let pop1 = document.getElementById('wf1')
let pop2 = document.getElementById('wf2')
let pop3 = document.getElementById('wf3')
let pop4 = document.getElementById('wf4')

let closed = document.querySelectorAll('#close')

let popup1 = document.getElementById('popup1')
let popup2 = document.getElementById('popup2')
let popup3 = document.getElementById('popup3')
let popup4 = document.getElementById('popup4')

let boxes = document.getElementById('totalboxes')

let parent = document.getElementById('parent')

pop1.addEventListener('click', function(){
    popup1.style.display = 'block'
    boxes.style.opacity = 0.5; 
})

pop2.addEventListener('click', function(){
    popup2.style.display = 'block'
    boxes.style.opacity = 0.5; 
})

pop3.addEventListener('click', function(){
    popup3.style.display = 'block'
    boxes.style.opacity = 0.5; 
})

pop4.addEventListener('click', function(){
    popup4.style.display = 'block'
    boxes.style.opacity = 0.5; 
})

closed.forEach(function(closed) {
    closed.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
        boxes.style.opacity = 1;
    })    
});

