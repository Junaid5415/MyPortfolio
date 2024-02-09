document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('div');
    const body = document.querySelector('body');
    const span = myDiv.querySelector('span');
    
        function myFunction(){
            myDiv.style.display = 'none'; 
      

        }

    body.onload = myFunction;
});