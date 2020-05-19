var input_value;
function set_input_value(){
	input_value = document.getElementById("txt").value;
	input_value = input_value.split(',');
	console.log(input_value);
	input_value.forEach(element => {
		var current_tree = document.getElementById(element);
		current_tree.addEventListener('click', openw, true);
	});
}
document.getElementById("btn").onclick = set_input_value;
function openw()
{
	var okno = window.open();
	var node = this.cloneNode(true);
	okno.document.body.insertBefore(node,okno.document.body.firstChild);
}