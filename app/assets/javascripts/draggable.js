$(function () {
    $('#draggable').dialog();
    $('#draggable').draggable({
	cursor: 'move',
	container: 'document'

	});
    $('#droppable').droppable({
	drop: handleDropEvent
    });
});
function myHelper( event ) {
  return '<img src="test.png"/>';
}

function handleDropEvent(event, ui) {
    var draggable = ui.draggable;

    draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    draggable.draggable( 'option', 'revert', false );
}
