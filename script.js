//your code here
const draggables = document.querySelectorAll('.draggable');

let draggedItem = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedItem = draggable;
        setTimeout(() => {
            draggable.style.display = 'none';
        }, 0);
    });

    draggable.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    draggable.addEventListener('drop', (e) => {
        if (draggedItem !== null && draggedItem !== draggable) {
            // Swap the background images
            const temp = draggable.style.backgroundImage;
            draggable.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = temp;

            // Swap the div contents
            const tempId = draggable.id;
            draggable.id = draggedItem.id;
            draggedItem.id = tempId;
        }
    });
});