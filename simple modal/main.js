//Get the modal elements
var modal = document.getElementById('simpleModal');
//Get the open modal button
var modalBtn = document.getElementById('modalBtn');
//Get the close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal)

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//listen to outside click
window.addEventListener('click', clickOutside)

//Function to get modal
function openModal(){
    modal.style.display = 'block';
}

//Funcyion to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Funcyion to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}



