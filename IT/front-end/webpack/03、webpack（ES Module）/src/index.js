import avatar from './avatar.jpg';
import styles from './index.scss';
import CreateAvatar from './createAvatar';

var img = new Image();
img.src = avatar;
img.classList.add(styles.avatar);

var root = document.getElementById('root');
root.append(img);

CreateAvatar();

console.log('hello world 12212321312');
