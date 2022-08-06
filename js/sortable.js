const contenedorListas = document.getElementById("contenedorlistas");

contenedorListas.addEventListener("click", ()=>{
  const items = document.getElementsByClassName("contenedorTareas"); 
  
    for (let i = 0; i < items.length; i++) {                       
      new Sortable(items[i], {                                     
        group: 'nested',                                           
        animation: 150,                                            
        chosenClass: 'chosen',                                     
      });
    }
});