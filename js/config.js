

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
  ano: 2025,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
  <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
  <span>Copyleft <span id="footerAno"></span> Dayane Bernardes</span>
  `,

}

