document.addEventListener("DOMContentLoaded", (event) => {
    let listElm = document.querySelector('#infiniteList1');
    let listElm2 = document.querySelector('#infiniteList2');

    // Create array of items to load
    let items = [];

    // Fill array with ordered/patterned file names
    for (let i = 1; i < 41; i++) {
        let string = i + "src.png";
        items.push(string);
    }

    let y = 0;
    window.setInterval(() => {
        listElm.scrollTo({top: y, behavior: "smooth"});
        listElm2.scrollTo({top: y*2, behavior: "smooth"});
        y += 2;
    }, 100);

    // Add 5 items.
    let loadMore = function(list) {
        for (let i = 0; i < 20; i++) {
            let item = document.createElement('li');
            let nextItem = items[Math.floor(Math.random() * items.length)];
            item.innerHTML =
                `<img src="images/${nextItem}" alt="${nextItem}">`;
            list.appendChild(item);
        }
    };

// Detect when scrolled to bottom.
    listElm.addEventListener('scroll', function() {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            loadMore(listElm);
        }
    });

    listElm2.addEventListener('scroll', function() {
        if (listElm2.scrollTop + listElm2.clientHeight >= listElm2.scrollHeight) {
            loadMore(listElm2);
        }
    });

// Initially load some items.
    loadMore(listElm);
    loadMore(listElm2);
});