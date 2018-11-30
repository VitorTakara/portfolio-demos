// type: 'danger', 'success'
// message: mensagem a ser exibida
// url: url a ser re-direcionada

function showToaster(message, type = "danger", url = '') {
    if(message){

        if(type == '')
            type = 'danger'; 

        $.toaster({
            priority: type,
            message: message,
            settings: {
                timeout: 5000
            }
        });

        // Se não ter URL, não vai ter redirecionamento
        if (url != '')
            window.location.href = url;
    }     
}