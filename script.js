const mainParagraphs = document.querySelectorAll('.main-paragraph');
const addBtn = document.querySelector('#js-add');
const mainContent = document.querySelector('.main-content');
let counter = mainParagraphs.length + 1;

// when user clicks a paragraph, console log "paragraph clicked!"
// sub-optimal
// mainParagraphs.forEach((paragraph) => {
//     paragraph.addEventListener('click', (event) => {
//         console.log('Paragraph Clicked!');
//     })
// })
// optimal
mainContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('main-paragraph')) {
        console.log('Paragraph Clicked!');
    }
})

// when the "add a paragraph" button is clicked, add a new paragraph (continue counting up)
addBtn.addEventListener('click', (event) => {
    // create a new paragraph
    const newPara = document.createElement('p');
    // give it a class of "main-paragraph"
    newPara.classList.add('main-paragraph');
    // update the innerText
    newPara.innerText = `Paragraph ${counter}`;
    // add to the page
    mainContent.appendChild(newPara);
    // update the counter, to prepare for the next paragraph
    counter++;
})