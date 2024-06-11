document.addEventListener('DOMContentLoaded', () => {
    
const Images = [
    {
        url: 'https://images.pexels.com/photos/18978089/pexels-photo-18978089/free-photo-of-set-table-in-a-fancy-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Table Set',
        description: 'Table Set'
    },
    {
        url: 'https://images.pexels.com/photos/18207381/pexels-photo-18207381/free-photo-of-window-in-bar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Window',
        description: 'Window'
    },
    {
        url: 'https://images.pexels.com/photos/23534117/pexels-photo-23534117/free-photo-of-a-city-skyline-is-reflected-in-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'City Skyline',
        description: 'City Skyline'
    },
    {
        url: 'https://images.pexels.com/photos/6292159/pexels-photo-6292159.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Penguin',
        description: 'Penguin'
    },
    {
        url: 'https://images.pexels.com/photos/25626514/pexels-photo-25626514/free-photo-of-root-node-problems.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Root Node',
        description: 'Root Node'
    },
    {
        url: 'https://images.pexels.com/photos/1427447/pexels-photo-1427447.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Parrot',
        description: 'Parrot'
    }
]


let index = 0;


loadImage();

function loadImage(){
    const gallery = document.getElementById('gallery');

    Images.forEach(Image => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer';

        const img = document.createElement('img');
        img.className = 'image';
        img.src = Image.url;
        img.alt = Image.description;


        const title = document.createElement('h3');
        title.textContent = Image.title;
        title.className = 'imgTitle';

        const description = document.createElement('p');
        description.textContent = Image.description;
        description.className = 'imgDesc';


        imageContainer.appendChild(img);
        imageContainer.appendChild(title);
        imageContainer.appendChild(description);


        gallery.appendChild(imageContainer);
    });
}
});
