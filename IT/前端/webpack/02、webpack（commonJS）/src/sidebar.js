function Sidebar() {
	var dom = document.getElementById('root');
	var slidebar = document.createElement('div');
	slidebar.innerHTML = "slidebar";
	dom.append(slidebar);
}


module.exports = Sidebar;