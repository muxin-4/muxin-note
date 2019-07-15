function groupBy(array, f) {
	// console.log('array', array);
	if (!array) return;
	let groups = {};
	array.forEach(function (o) {
		let group = JSON.stringify(f(o));
		groups[group] = groups[group] || [];
		groups[group].push(o);
	});
	return Object.keys(groups).map((group) => {
		return groups[group];
	});
}
var list = [
	{ name: "1", lastname: "foo1", age: "16" },
	{ name: "2", lastname: "foo", age: "13" },
	{ name: "3", lastname: "foo1", age: "11" },
	{ name: "4", lastname: "foo", age: "11" },
	{ name: "5", lastname: "foo1", age: "16" },
	{ name: "6", lastname: "foo", age: "16" },
	{ name: "7", lastname: "foo1", age: "13" },
	{ name: "8", lastname: "foo1", age: "16" },
	{ name: "9", lastname: "foo", age: "13" },
	{ name: "0", lastname: "foo", age: "16" }
];
groupBy(list, (item) => {
	return [item.lastname];
});