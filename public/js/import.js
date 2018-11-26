// this is the functions that listen to the checkboxes. if the user choose the spcific checkbox, coresponding cell context should come up. this is manually typed code, in the future the context including ID of the element will generate automatically.
$( "#col_1" ).change(function() {
    console.log($('#col_1').is(':checked'));
    if($('#col_1').is(':checked')){
        jQuery('<div/>', {
            id: 'col1cell1'
        }).appendTo('#cellCol_1');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col1cell1');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col1cell1val"
        }).appendTo('#col1cell1');
        $("<p></p>").text("cell content 1").appendTo("#col1cell1val");

        jQuery('<div/>', {
            id: 'col1cell2'
        }).appendTo('#cellCol_1');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col1cell2');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col1cell2val"
        }).appendTo('#col1cell2');
        $("<p></p>").text("cell content 2").appendTo("#col1cell2val");

        jQuery('<div/>', {
            id: 'col1cell3'
        }).appendTo('#cellCol_1');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col1cell3');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col1cell3val"
        }).appendTo('#col1cell3');
        $("<p></p>").text("cell content 3").appendTo("#col1cell3val");
    }else{
        $("#cellCol_1").empty();
    }
  });

  $( "#col_2" ).change(function() {
    console.log($('#col_2').is(':checked'));
    if($('#col_2').is(':checked')){
        jQuery('<div/>', {
            id: 'col2cell1'
        }).appendTo('#cellCol_2');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col2cell1');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col2cell1val"
        }).appendTo('#col2cell1');
        $("<p></p>").text("cell content 1").appendTo("#col2cell1val");

        jQuery('<div/>', {
            id: 'col2cell2'
        }).appendTo('#cellCol_2');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col2cell2');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col2cell2val"
        }).appendTo('#col2cell2');
        $("<p></p>").text("cell content 2").appendTo("#col2cell2val");

        jQuery('<div/>', {
            id: 'col2cell3'
        }).appendTo('#cellCol_2');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col2cell3');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col2cell3val"
        }).appendTo('#col2cell3');
        $("<p></p>").text("cell content 3").appendTo("#col2cell3val");
    }else{
        $("#cellCol_2").empty();
    }
  });
  
  $( "#col_3" ).change(function() {
    console.log($('#col_3').is(':checked'));
    if($('#col_3').is(':checked')){
        jQuery('<div/>', {
            id: 'col3cell1'
        }).appendTo('#cellCol_3');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col3cell1');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col3cell1val"
        }).appendTo('#col3cell1');
        $("<p></p>").text("cell content 1").appendTo("#col3cell1val");

        jQuery('<div/>', {
            id: 'col3cell2'
        }).appendTo('#cellCol_3');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col3cell2');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col3cell2val"
        }).appendTo('#col3cell2');
        $("<p></p>").text("cell content 2").appendTo("#col3cell2val");

        jQuery('<div/>', {
            id: 'col3cell3'
        }).appendTo('#cellCol_3');
        jQuery('<input/>', {
            type: 'checkbox',
            class:'custom-control-input'
        }).appendTo('#col3cell3');
        jQuery('<label/>', {
            class:'custom-control-label',
            id: "col3cell3val"
        }).appendTo('#col3cell3');
        $("<p></p>").text("cell content 3").appendTo("#col3cell3val");
    }else{
        $("#cellCol_3").empty();
    }
  });