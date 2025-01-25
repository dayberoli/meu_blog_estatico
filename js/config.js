/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/
 const firebaseConfig = {
  apiKey: "AIzaSyCUb2szN690Ml-Z0DT3BL25MWDmuutI5-o",
  authDomain: "meu-blog-estatico-6fc38.firebaseapp.com",
  projectId: "meu-blog-estatico-6fc38",
  storageBucket: "meu-blog-estatico-6fc38.firebasestorage.app",
  messagingSenderId: "179954159937",
  appId: "1:179954159937:web:5c13df3d3d7dc48a8e11c0",
  measurementId: "G-Y52CKH2RXJ"
};

/**
 * Configuração do site;
 **/
 const site = {

  /**
    * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
    **/
  nome: "Nosso Estilo Blog",

  /**
   * Logotipo do site, usado na tag <header>...</title>
   */
  logo: "img/logo.png",

  /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto
   **/
  verPerfil: true,

  /**
   * Ano de lançamento do site
   **/
  ano: 2022,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
  <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
  <span>Copyleft <span id="footerAno"></span> Dayane Bernardes</span>
  `,

}

