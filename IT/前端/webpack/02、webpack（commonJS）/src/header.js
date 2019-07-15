function Header() {
	var dom = document.getElementById('root');
	var header = document.createElement('div');
	header.innerHTML = "header";
	dom.append(header);
}

module.exports = Header;