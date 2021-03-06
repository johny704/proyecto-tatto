const max = new Date().getFullYear(),
    min = max - 20;

const anioSelect = document.getElementById('anio');
   for(let i = max; i > min; i--){
       const option = document.createElement('option');
       option.value = i;
       option.innerHTML = i
       anioSelect.appendChild(option);
   }