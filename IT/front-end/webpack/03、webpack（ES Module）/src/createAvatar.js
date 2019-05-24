import avatar from './avatar.jpg';
import styles from './index.scss';

function createAvatar() {
	var img = new Image();
	img.src = avatar;
	img.classList.add(styles.avatar, styles.test);

	var root = document.getElementById('root');
	root.append(img);
}

export default createAvatar;
