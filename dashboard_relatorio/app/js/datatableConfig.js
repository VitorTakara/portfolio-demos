$(document).ready(function () {
    // Executa datatable em tabela, se existir.
    if ($('#datatable')) {

        $('#datatable').DataTable({
            responsive: true,
            language: {
               "decimal": ",",
               "thousands": ".",
               "emptyTable": "Não há nenhum registro na tabela",
               "info": "Exibindo _START_ de _END_ do total de _TOTAL_ registros",
               "infoEmpty": "Exibindo 0 de 0 do total de 0 registros",
               "lengthMenu": "Exibindo _MENU_ registros",
               "loadingRecords": "Carregando...",
               "search": "Procurar:",
               "infoFiltered":   "(Filtrado de _MAX_ registros)",
               "zeroRecords": "Nenhum registro encontrado",
               "paginate": {
                   "next": "Próximo",
                   "previous": "Anterior"
               }
           },
            "initComplete": function(settings, json) {
                setTimeout(function(){
                    $("#datatable").fadeIn("slow");
                }, 0)
            }
        });

    };


})