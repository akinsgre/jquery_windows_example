$(function () {
    $('#draggable1').dialog({height: "300"});
    $('#draggable2').dialog({height: "300"});
    $('#draggable3').dialog({height: "300"});
    $('.droppable').droppable({
	drop: handleDropEvent
    });
});


function handleDropEvent(event, ui) {
    var draggable = ui.draggable;

    draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    draggable.draggable( 'option', 'revert', false );
}
