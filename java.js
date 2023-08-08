let head = document.getElementById('head');
let head2 = document.getElementById('head2');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');



let i = 5;

btn.onclick = function () {
    setInterval(
        function(){
            head2.innerHTML = 'please wait'
            head.innerHTML = i--;
            while(i < -1){
                clearInterval(this);
                setTimeout(
                    location.assign('https://www.youtube.com/watch?v=I0j9-5IVSC4'),500
                )
            }
        },1000
       );
    
} 

 
btn2.onclick = function () {
    setInterval(
        function(){
            head2.innerHTML = 'please wait'
            head.innerHTML = i--;
            while(i < -1){
                clearInterval(this);
                
                setTimeout(
                    let imga = document.createElement('img')
                    imga.src = 'g.jpg',500
                )
            }
        },1000
       );
    
} 


   

   
