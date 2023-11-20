let imgdiv = document.getElementById('imgdiv');
let qrimg = document.getElementById('qrimg');
let qrtext = document.getElementById('qrtext')

function Gen(){
    if(qrtext.value.length > 0){
         qrimg.src = 'https://quickchart.io/qr?text=' + qrtext.value;
    imgdiv.classList.add('show-img');
    }else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.add('error');
        },1000);
    }
   
}

   
   

   
