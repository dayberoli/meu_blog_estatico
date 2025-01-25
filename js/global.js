/**
 * JavaScript do template do site.
 * É executado em todas as páginas.
 * Todo o código global fica aqui, por exemplo, gestão do usuário.
 **/

/**
 * Inicializa o Firebase e as ferramentas Firestore e Auth
 */
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();

/**
 * Quando o documento está pronto, roda o JavaScript
 **/
 window.onload = () => { // Isso é uma "arrow function"

    /**
     * Altera o <title> padrão da página.
     **/
    document.title = site.nome;

    // Carrega o template HTML em div#wrap
    _('#wrap').innerHTML = template();

    /**
     * Obtém o ano da data atual e atualiza a licensa do site.
     **/
    let agora = new Date();
    let ano = agora.getFullYear();
    if (ano > site.ano)
        _('#footerAno').innerHTML = `${site.ano} ${ano}`;
    else
        _('#footerAno').innerHTML = site.ano;

}