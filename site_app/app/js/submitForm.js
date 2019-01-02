function submitForm() {
    
    let form = {
        nome: document.querySelector("#form_nome").value || '',
        email: document.querySelector("#form_email").value || '',
        msg: document.querySelector("#form_msg").value || ''
    };

    let params = `
        nome=${form.nome}
        &email=${form.email}
        &mensagem=${form.msg}
        &pd=bg6d29gecnZVhUd8WKPQ2ScHZPmTDvc8TFTUq65xkeAeTrANxFrhkGKy6ZdWz8NNP8rZmxndDggQgtrLtzh4Vzs4vcZBBEfD9rPLWVVBqSSD4Zk8KKSAjryhTC5utryy
    `;

    const http = new XMLHttpRequest();
    http.open("POST", "../eemail.aspx", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {

        let span_success = document.querySelector("#email_sucesso");
        let span_error = document.querySelector("#email_erro");

        if(http.status === 200) {
            span_success.classList.remove("display-none");
            span_success.classList.add('fadeIn');

            span_error.classList.add('display-none');
        } else{
            span_error.classList.remove("display-none");
            span_error.classList.add('fadeIn');

            span_success.classList.add('display-none');
        }
    };

    // http.onreadystatechange = function () {
    //     if(http.status === 200) {
    //         document.querySelector("#email_sucesso").classList.add('fadeIn');
    //         document.querySelector("#email_sucesso").classList.remove('fadeOut');

    //         document.querySelector("#email_erro").classList.remove('fadeIn');
    //         document.querySelector("#email_erro").classList.add('fadeOut');
    //     } else{
    //         document.querySelector("#email_sucesso").classList.remove('fadeIn');
    //         document.querySelector("#email_sucesso").classList.add('fadeOut');

    //         document.querySelector("#email_erro").classList.add('fadeIn');
    //         document.querySelector("#email_erro").classList.remove('fadeOut');
    //     }
    // };

    http.send(params);
}