setTimeout(() => {
    const userConfirmed = confirm("¿Quieres ordenar la lista alfabéticamente?");
    
    if (userConfirmed) {
        // Obtener la lista de palabras
        const list = document.getElementById("wordList");
        const words = Array.from(list.children).map(item => item.textContent);
        
        // Ordenar las palabras alfabéticamente
        words.sort((a, b) => a.localeCompare(b));

        // Borrar el contenido actual de la lista
        list.innerHTML = "";

        // Insertar las palabras ordenadas
        words.forEach(word => {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            list.appendChild(listItem);
        });
    }
}, 3000);