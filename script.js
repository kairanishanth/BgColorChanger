const buttons = document.querySelectorAll('.btn');

let redcol = document.querySelector('red');
let pinkcol = document.querySelector('pink');
let greencol = document.querySelector('green');
let bluecol = document.querySelector('blue');
let yellowcol = document.querySelector('yellow');

const body = document.querySelector('body')


// body.addEventListener('click', function(e){
//     console.log(e);
//     console.log(e.target);
//     body.style.background=e.target.id;
// })


buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="red"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="pink"){
            console.log(e);
            console.log(e.target);
            body.style.background=e.target.id;
        }
        if(e.target.id==="green"){
            console.log(e);
            console.log(e.target);
            body.style.background=e.target.id;
        }
        if(e.target.id==="blue"){
            console.log(e);
            console.log(e.target);
            body.style.background=e.target.id;
        }
        if(e.target.id==="yellow"){
            console.log(e);
            console.lof(e.target);
            body.style.background=e.target.id;
        }

    })
})

