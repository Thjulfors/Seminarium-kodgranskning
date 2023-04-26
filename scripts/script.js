const gallery = document.querySelector('#tools-gallery');


const listStorage = async() => {
    const url = 'http://localhost:3000/storage';

    const response = await fetch(url);

    if(response.status === 200){
        const data = await response.json();

        data.forEach((storage) => {
            gallery.insertAdjacentHTML('beforeend',
            `<div>
            <p>Lagerplats: ${storage.storageLocation} Verktyg: ${storage.tool}</p>
            </div>`
            )
        })
    }
}

listStorage();