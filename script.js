const images = document.querySelectorAll('.images img');
const prvBtn = document.getElementById('previous');
const nxtBtn = document.getElementById('next');
let currentIndex = 0;

function showImage(index){
    images.forEach((image) => {
        image.style.display = 'none';
    });
    images[index].style.display = 'block';
}

//show previous image
function previousImage(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = 0;
        prvBtn.style.display = 'none';
    }
   showImage(currentIndex);
}

//show next image
function nextImage(){
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex =3;
        nxtBtn.style.display = 'none';
    } 
    showImage(currentIndex);
}



//what to haen when click the previous button
prvBtn.addEventListener('click', () => {
    previousImage();
    nxtBtn.style.display = 'block';
});

//what to hapen when click the next button
nxtBtn.addEventListener('click', () => {
    nextImage();
    prvBtn.style.display = 'block';
});

//showing the current image/*
showImage(currentIndex);

