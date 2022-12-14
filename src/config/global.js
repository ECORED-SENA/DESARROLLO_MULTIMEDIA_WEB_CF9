export default {
  global: {
    componenteFormativo: 'Pruebas de usabilidad y accesibilidad',
    descripcionCurso:
      'Este componente entrega los elementos conceptuales acerca de la usabilidad y la accesibilidad de elementos gráficos, audiovisuales e interactivos de acuerdo con las necesidades de los usuarios y lo establecido en las especificaciones del proyecto de multimedia. Así mismo, se aborda la aplicación de instrumentos, metodología, tipos de pruebas e informes requeridos para comprensión y aplicación práctica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elaboración de instrumentos de usabilidad y accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El concepto de usabilidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El concepto de accesibilidad',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aplicación de instrumentos de usabilidad y accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Las pruebas y sus tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los indicadores de usabilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Las herramientas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Informes de pruebas de usabilidad y accesibilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El concepto de usabilidad',
      referencia:
        'Profile Software Services. (2021). 10 principios de usabilidad de Jakob Nielsen. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=IYrKEu3qoJI&ab_channel=ProfileSoftwareServices',
    },
    {
      tema: 'Aplicación de instrumentos de usabilidad y accesibilidad',
      referencia:
        'IDA Chile. (2019). Usabilidad y accesibilidad, ¿En qué se diferencian? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ek9rYHWHKZk',
    },
    {
      tema: 'Herramientas para mejorar la accesibilidad',
      referencia:
        'Cataldo Sandoval, R. (2020). Accesibilidad web, nuevas herramientas para PICTOS. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5wM3tny5j_M',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'permite que cualquier persona pueda disponer y utilizar las edificaciones, servicios o productos en igualdad de condiciones que los demás (Webmati, 2015).',
    },
    {
      termino: 'CPA',
      significado:
        'costo por adquisición, es el costo de cada clic, que se produce cuando el usuario logra ejercer una acción (Hotmart, s.f.).',
    },
    {
      termino: 'CPC',
      significado:
        'costo por clic, indica el costo por cada clic de un anuncio (Hotmart, s.f.).',
    },
    {
      termino: 'CPM',
      significado:
        'costo por mil, indica el costo de mil impresiones de un anuncio en una página web      (Hotmart, s.f.)',
    },
    {
      termino: 'Error 404',
      significado:
        'error clásico de la web, donde el contenido ha sido eliminado o trasladado, quedando un link roto. Aparece una imagen con un gran 404 (Digital Guide, 2019)',
    },
    {
      termino: 'Prototipo',
      significado:
        'paso siguiente al <em>wireframe</em>, donde se plantea un boceto visual con referencias visuales y estructura, detallando más el contenido y la organización (Top Position, s.f.).',
    },
    {
      termino: 'Test A/B',
      significado:
        'prueba de dos variantes para comparar la elección con pequeñas variaciones del producto (Cardona, 2018).',
    },
    {
      termino: 'UX',
      significado:
        'se centra en la experiencia general del usuario final, incluidas sus percepciones, emociones y respuestas al producto, sistema o servicio de una empresa. (Hubspot, 2020).',
    },
    {
      termino: '<em>Wireframes</em>',
      significado:
        'esquema básico donde se presenta una página web, no se tiene en cuenta la parte gráfica, ni los colores, ni el contenido, simplemente una distribución visual (NeoAttack, s.f).',
    },
  ],
  referencias: [
    {
      referencia:
        'Beltré, F., H. J. (2008). Aplicación de la usabilidad al proceso de desarrollo de páginas web. Upm.',
      link: 'http://oa.upm.es/1176/',
    },
    {
      referencia: 'Cardona, L. (2018). ¿Qué es el test A/B? Cyberclick.',
      link: 'https://www.cyberclick.es/numerical-blog/que-es-test-a/b',
    },
    {
      referencia:
        'Castillo, C., Y. (2020). Accesibilidad WEB, nuevas herramientas para PICTOS. Wiki EAD.',
      link:
        'https://wiki.ead.pucv.cl/images/7/75/Memoria_de_Titulo_Accesibilidad_Web_-_Raquel_Cataldo_y_Yorka_Castillo.pdf',
    },
    {
      referencia: 'Castillo, C., Y. (2020). Diagrama complementario. Wiki ead.',
      link: 'https://wiki.ead.pucv.cl/Archivo:MODAWYUW_RY.png',
    },
    {
      referencia:
        'Digital Guide. (2019). Error 404: ¿qué significa y para qué se utiliza? Digital Guide.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/creacion-de-paginas-web/que-significa-el-error-404-not-found/',
    },
    {
      referencia:
        'Hotmart. (s.f.). Entiende qué es CPC y empieza tus campañas pagadas con buen pie. Blog Hotmart.',
      link: 'https://blog.hotmart.com/es/que-es-cpc/',
    },
    {
      referencia:
        'Hubspot. (2020). Diseño UX: guía completa sobre la experiencia de usuario.',
      link: 'https://blog.hubspot.es/marketing/experiencia-de-usuario-ux',
    },
    {
      referencia:
        'Carreras, M., O. (2021). Validadores y herramientas de accesibilidad y usabilidad. Usabelyaccesible.com.',
      link: 'https://www.usableyaccesible.com/recurso_misvalidadores.php',
    },
    {
      referencia: 'NeoAttack. (s.f.). Concepto de Wireframe. Neoattack.',
      link: 'https://neoattack.com/neowiki/wireframe/',
    },
    {
      referencia:
        'Top Position. (s.f.). ¿Qué es un PROTOTIPO WEB? T-posittion.',
      link: 'https://t-position.com/ux-usabilidad-web/prototipo-web/',
    },
    {
      referencia: 'WebMati. (2015). ¿Qué es "accesibilidad"? Webmati.',
      link:
        'http://www.webmati.es/index.php?option=com_content&view=article&id=12:que-es-accesibilidad&catid=13&Itemid=160',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Giovanna Escobar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
