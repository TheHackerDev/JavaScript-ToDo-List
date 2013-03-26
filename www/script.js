$(document).ready(function(){
	$('button#toDoSubmit').click(function(){
		var itemToAdd = $('input[name="toDoInput"]').val();
		// Check if the item is empty before adding it
		if (itemToAdd){
			$('#toDoList').append('<li class="toDoItem">' + itemToAdd + '</li>');
			$('input[name="toDoInput"]').val('');
			$('#emptyValue').hide('slide', 'linear', 'slow');
		}
		else {
			$('#emptyValue').show('slide', 'linear', 'slow');
		}
	});
});