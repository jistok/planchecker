function savePlan() {
    // Show spinner
    $('#saveSpinner').show();
    $('#bookmarkMsg').hide();
    $.ajax({
        method: "POST",
        url: "/plan/",
        dataType: "json",
        data: {
            action: "save",
            plantext: planTextBase64
        }
    }).done(function( res ) {
        if (res.status == "success") {
            $('#planRefLink').html(res.ref);
            $('#planRefLink').attr('href', '/plan/' + res.ref);
            $('#planRef').show();
            $('#bookmarkMsg').show();
            $('#planSave').hide();
        } else if (res.status == "failure") {
            alert(res.msg);
        }

        // Remove spinner
        $('#saveSpinner').css("display", "none");
    });
}

$(function () {
    // Initialize tooltips
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    $('#bookmarkMsg').hide();

    if (typeof planRef !== 'undefined') {
        if (planRef == "") {
            $('#planSave').show();
            $('#alertTop').show();
            $('#planRef').show();
        } else {
            $('#planRef').show();
            $('#planSave').show();
        }
    }
});
