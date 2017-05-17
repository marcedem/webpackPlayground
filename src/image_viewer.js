// import horse from '../assets/horse.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {

    const thumbnail = document.createElement('img');
    thumbnail.src = small;
    document.body.appendChild(thumbnail);

}

/*
const image = document.createElement('img');
image.src = horse;
document.body.appendChild(image);
*/