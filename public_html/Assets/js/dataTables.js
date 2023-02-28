var sampleTable;
document.addEventListener('DOMContentLoaded', function(){

    sampleTable = $('#sampleTable').dataTable({
        "aProcessing":true,
        "aServerSide":true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
        // "ajax": {
        //     "url": " "+base_url+"/Roles/getRoles",
        //     "dataSrc":""
        // },
        "columns": [
            {"data":"nombre"},
            {"data":"cantidad"},
            {"data":"costo"}
        ],
        'dom': 'lBfrtip',
        'buttons': [
            /*'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'*/
            {
                "extend": "copyHtml5",
                "text": "<i class='fa-solid fa-copy'></i> Copiar",
                "titleAttr": "Copiar",
                "className": "btn btn-secondary"
            },{
                "extend": "excelHtml5",
                "text": "<i class='fa-solid fa-file-excel'></i> Excel",
                "titleAttr": "Excel",
                "className": "btn btn-success"
            },{
                "extend": "pdfHtml5",
                "text": "<i class='fa-solid fa-file-pdf'></i> PDF",
                "titleAttr": "PDF",
                "className": "btn btn-danger",
            },{
                "extend": "csvHtml5",
                "text": "<i class='fa-solid fa-file-csv'></i> CSV",
                "titleAttr": "CSV",
                "className": "btn btn-info"
            }
        ],
        "responsive":true,
        "bDestroy": true,
        "iDisplayLenght": 10,
        "order":[[0,"desc"]]
    })
})


$('#sampleTable').DataTable();

$(document).ready( function () {
    $('#myTable').DataTable();
} );