<script>

class Node {
		constructor() {
				this.data = 0;
				this.next = null;
			}
		}
		
var head = null;
var tail = null;


function display()
	{

	if (head == null)
		return;
	var temp = head;

	while (temp != null) {
		document.write(temp.data + " ");
		temp = temp.next;
	}
		document.write("</br>");
	}

function push( data)
{

	var nn = new Node();
	nn.data = data;
	nn.next = null;

	if (head == null) {
		head = nn;
	}
	else {
		var temp = head;

		while (temp.next != null) {
			temp = temp.next;
		}

		temp.next = nn;
	}
}

function unfold( node)
{
	if (node == null)
		return;


	if (node.next == null) {
		head = tail = node;
		return;
	}

  
	else if (node.next.next == null) {
		head = node;
		tail = node.next;
		return;
	}


	var temp = node.next;

	
	unfold(node.next.next);


	node.next = head;
	head = node;


	tail.next = temp;
	tail = temp;
	tail.next = null;
}



push(1);
push(5);
push(2);
push(4);
push(3);


display();


unfold(head);


display();


</script>
