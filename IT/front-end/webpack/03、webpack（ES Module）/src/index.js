import avatar from './avatar.jpg';
import './index.scss';

var img = new Image();
img.src = avatar;
img.classList.add('avatar', 'test');

var root = document.getElementById('root');
root.append(img);
