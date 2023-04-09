const bookControls = Array.from(document.querySelectorAll(".book__control a"));
const bookContent = document.getElementById("book");


bookControls.forEach(element => element.addEventListener("click", (evt) => {
    bookContent.classList.remove('book_fs-big', 'book_fs-small');    
    bookControls.forEach(element => element.classList.remove("font-size_active"));    
        
    element.classList.add("font-size_active");
    const elementData = element.dataset.size;
    
    if(elementData) {
        bookContent.classList.add("book_fs-" + elementData);
    };

    
    evt.preventDefault();
}));