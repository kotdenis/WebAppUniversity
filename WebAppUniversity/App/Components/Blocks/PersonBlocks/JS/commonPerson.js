


var counter = 1;
function getFullEnrolleeDepartment() {
    $.ajax({
        type: 'GET',
        url: 'api/personapi',
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
        },
        success: function (data) {
            const tBody = '#tableCommonBody';
            $.each(data, function (key, item) {
                const tr = $("<tr></tr>")
                    .append($('<td></td>').text(item.number))
                    .append($('<td></td>').text(item.enrolleeName))
                    .append($('<td></td>').text(item.programName))
                    .append($('<td></td>').text(item.departmentName));
                tr.appendTo(tBody);
            });
        }
    });
}