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
let image = document.getElementById('image');
 
btn2.onclick = 
   function(){ 
    
    image.src = 'g.jpg';
    image.style.width = '400px'
    image.style.height = '400px'


   }
   



   

   
   

   
