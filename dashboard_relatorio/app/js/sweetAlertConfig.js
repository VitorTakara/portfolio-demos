// type: 'deletar'
// url: url de onde vai fazer o delete

function mySweetAlert() {
    swal({
        title: "Você tem certeza?",
        text: "Você tem certeza de que deseja realizar esta ação?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons:true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
       if(result.value)
            swal(
               'Sucesso!',
               'Você realizou esta ação! :)',
               'success'
            )
         else{
            swal(
               'Cancelado!',
               'Operação cancelada',
               'error'
            )
         }
    })
}