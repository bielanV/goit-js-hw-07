const navListItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${navListItems.length}`);

navListItems.forEach((items) => { 
    const title = items.querySelector('h2').textContent;
    const titleCount = items.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${titleCount}`);
});

