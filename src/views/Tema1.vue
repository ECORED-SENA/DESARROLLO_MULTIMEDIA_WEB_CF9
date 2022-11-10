<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Elaboración de instrumentos de usabilidad y accesibilidad

    .row.justify-content-center
      .col-lg-7
        p(data-aos="fade-right") El desarrollo de elementos de usabilidad permitirá medir la efectividad de los sitios <em>web</em> o las piezas multimediales en cuanto a la manera como el usuario se relaciona con estas, pues el propósito es que desde el inicio del diseño se conciban los aspectos que se requieren en función de características que permitan la transmisión de la información de manera efectiva en las presentaciones finales de las piezas.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-t.mx-auto(data-aos="fade-left")(src='@/assets/curso/tema1/img01.png', alt='')

    Separador
    
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 1.1 El concepto de usabilidad 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.img-t.mx-auto(data-aos="fade-right")(src='@/assets/curso/tema1/img02.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El concepto de usabilidad surgió a partir del nacimiento y desarrollo de internet como red global de comunicación para el intercambio masivo de información y, en estos tiempos, podría considerarse como un medio de comunicación primordial. 
        p El ingeniero de interfaces Jakob Nielsen desarrolló formalmente este concepto, donde enuncia los factores que contribuyen a que un sitio <em>web</em> resulte fácil de utilizar, teniendo en cuenta como actor principal al usuario, lo cual permite que el diseño esté centrado en el usuario y en su experiencia en el sitio <em>web</em>.
        .bg_1.p-4
          p.m-0 La usabilidad posibilita que las personas que navegan en diferentes interfaces alcancen los propósitos con el mínimo esfuerzo, llegando a resultados y alcanzando sus objetivos, siendo capaz de recorrer la construcción gráfica de forma simple y eficiente, al tiempo que maneja el sitio con control propio.  
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p.m-0 La velocidad de ejecución es muy importante en la usabilidad, pues cuando un sitio carga muy lentamente es probable que haga desistir al usuario de navegar la página. 
          span.color-text1.text-bold Existen estudios que aseguran que si una página se demora en cargar más de 20 segundos, 
          | el nivel de deserción de los usuarios que se retiran sin verla es más o menos del 80%.
        .row.justify-content-center.mt-4   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema1/img03.svg', alt='')       
          .col-lg-10.col-xl-9.col-xxl-10
            p.mb-4(data-aos="fade-down") Es preciso que los enlaces o hipervínculos internos y externos se ejecuten de manera correcta, así como facilitar que el usuario pueda ponerse en contacto con las áreas de soporte en caso de ser necesario. 
        p.m-0 La sencillez y limpieza en el diseño facilitan la navegabilidad de los sitios para que los usuarios siempre busquen lo que encuentran. Cuanto más sencillo sea recorrer e interactuar en la página, más efectiva resultará la localización de la información, lo que deriva en una mejor experiencia para el usuario y posiblemente ayudará a convertir el usuario en un cliente, que es uno de los objetivos al construir un sitio <em>web</em>. Las interfaces deben estar pensadas desde la intuición del usuario sin necesitar largos procesos de aprendizaje de manejo y ser afable.
      .col-lg-5.mb-4(data-aos="fade-left")
        img.img-t.mx-auto(src='@/assets/curso/tema1/img04.png', alt='') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0.order-last.order-lg-first
        figure
          img.img-t.mx-auto(data-aos="fade-right")(src='@/assets/curso/tema1/img05.png', alt='')
      .col-lg-9.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-left")
        span.color-text1.text-bold La tipografía y el lenguaje escrito son un gran apoyo para reducir el tiempo de búsqueda 
        | y es importante resumir los contenidos para que leerlos sea una experiencia agradable y precisa y el usuario no se sobrecargue de información. También es importante tener en cuenta las decisiones de color para que estas generen legibilidad y contraste, permitiendo que la lectura sea cómoda para el usuario.

    .row.justify-content-center.mb-5
      .col-lg-8.col-xl-10.col-xxl-8
        p En la siguiente figura se visualiza el proceso de análisis para estudiar la usabilidad en el desarrollo de una pieza.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 1
          span.text-small.color_text <em>Proceso de usabilidad</em>
        img.img-t.mx-auto(data-aos="fade-right")(src='@/assets/curso/tema1/img06.svg', alt='')

        p Nota. Tomada de Beltré (2008).         

    .row.justify-content-center.mt-4.mb-4   
      .col-auto.d-none.d-lg-block
        img.img-t(src='@/assets/curso/tema1/img07.svg', alt='')       
      .col-lg-10
        p(data-aos="fade-down") Ahora, se debe revisar con atención el flujograma del proceso e identificar los puntos más críticos y cada uno de los pasos que se deben realizar para garantizar la aplicación de usabilidad en el diseño de páginas <em>web</em>. 

    .row.justify-content-center.mb-5
      .col-lg-8.col-xl-9.col-xxl-8
        h5 Las características principales de la usabilidad se pueden resumir en el siguiente recurso de aprendizaje: 
    
    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100(data-aos="fade-right")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img08.svg', alt='Texto que describa la imagen')

          h5.text-center Eficacia
          p.text-center Representa la exactitud con la que los usuarios alcanzan sus metas especificadas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img09.svg', alt='Texto que describa la imagen')

          h5.text-center Eficiencia
          p.text-center Los recursos gastados en relación con la certeza con la que los usuarios logran las metas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100(data-aos="fade-left")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')

          h5.text-center Satisfacción
          p.text-center El resultado final para el usuario que navega con comodidad y acepta los componentes.

    .row.justify-content-center.mb-5
      .col-lg-8.col-xl-10.col-xxl-8
        p La siguiente figura ilustra los elementos de a tener presente en cada una de las características de la usabilidad. 

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 2
          span.text-small.color_text <em>Características de la usabilidad</em>
        img.img-t.mx-auto(data-aos="fade-up")(src='@/assets/curso/tema1/img11.svg', alt='')

        p Nota. Tomada de Beltré (2008). 

    .bg_fondo1.mb-5
      p.text-center.mb-4 También es importante conocer los principios que Jakob Nielsen adaptó para la usabilidad del usuario. A continuación, se presentan cada uno de ellos.

      .row.justify-content-center(data-aos="fade-down-right")
        .col-lg-12
          .bg_fondo2
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema1/img12.png', alt='')
              .col-lg-7.mt-4
                .bg_slyder.mb-4
                  .p-4
                    SlyderA(tipo="b").color_slyder-a_botones
                      .row
                        .col-lg-12
                          h5.mb-4 1. Visibilidad del estado del sistema
                          p La interfaz debe ubicar al usuario todo el tiempo sobre lo que está pasando y en qué punto de la navegación se encuentra. 
                          .row.justify-content-center.mb-4
                            .col-lg-10
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img15.svg', alt='AvatarTop')
                          p.m-0 Ejemplo: al subir un archivo a Google Drive, el sistema indica que se está cargando y el tiempo restante.

                      .row
                        .col-lg-12
                          h5.mb-4 2. Relación entre el sistema y el mundo real
                          p Las interfaces y los sitios <em>web</em> deben estar pensadas en torno al lenguaje de usuario usando expresiones y palabras familiares, es muy importante que la información se muestre en un orden sensato y natural. 
                          .row.justify-content-center.mb-4
                            .col-lg-10
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img16.svg', alt='AvatarTop')
                          p.m-0 Ejemplo: en la página 404 de Lego, el mensaje es “página no encontrada”. El usuario no tiene por qué saber qué significa el error 404.

                      .row
                        .col-lg-12
                          h5.mb-4 3. Libertad y control por el usuario
                          p El sitio o interfaz debe permitir al usuario regresar al lugar anterior con facilidad de ser necesario, para esto debe estar muy bien pensado el mapa de navegación con opciones de “rehacer” y “deshacer”.
                          .row.justify-content-center.mb-4
                            .col-lg-12
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img17.png', alt='AvatarTop')
                          p.m-0 Ejemplo: En Gmail al enviar un correo a la papelera da la opción de deshacer la acción.
                      
                      .row
                        .col-lg-12
                          h5.mb-4 4. Consistencia y estándares
                          p Usar un lenguaje lógico, convencional y sostenerlo siempre asegurará que el usuario se pueda ubicar adecuadamente y logre llegar a donde quiere con precisión.
                          .row.justify-content-center.mb-4
                            .col-lg-12
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img18.png', alt='AvatarTop')
                          p.m-0 Ejemplo: un estándar de un sitio <em>web</em> es la situación del logo en la cabecera, en la parte superior izquierda de la página. El icono de menú en móvil (llamado menú hamburguesa) también se ha convertido en un estándar y el usuario lo identifica fácilmente.

                      .row
                        .col-lg-12
                          h5.mb-4 5. Prevención de errores
                          p Planificar de manera adecuada el sitio a través de los mapas de navegación, ayudará a prevenir que se generen errores y la prevención de estos, que es mejor que generar mensajes una vez sucedan.  
                        .row.justify-content-center.mb-4
                          .col-lg-9
                            figure
                              img.img-t.mx-auto(src='@/assets/curso/tema1/img19.png', alt='AvatarTop')
                        p.m-0 Ejemplo: los buscadores proporcionan asistencia a los usuarios para que encuentren lo que están buscando, con la función autocompletar o con la alternativa de resultados.

                      .row
                        .col-lg-12
                          h5.mb-4 6. Reconocimiento antes que recuerde
                          p Las opciones dentro del sitio o la interfaz deben estar visibles y así no exigirle al usuario memorizar información de diferentes lugares.
                          .row.justify-content-center.mb-4
                            .col-lg-12
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img20.png', alt='AvatarTop')
                          p.m-0 Ejemplo: los enlaces auxiliares de un home, que incluyen texto más icono para reforzar el mensaje.
                      
                      .row
                        .col-lg-12
                          h5.mb-4 7. Flexibilidad y eficiencia de uso
                          p Crear atajos o accesos directos personalizados ayudará a los usuarios expertos o frecuentes a acceder a la información de forma más rápida y eficaz.  
                          .row.justify-content-center.mb-4
                            .col-lg-5
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img21.png', alt='AvatarTop')
                          p.m-0 Ejemplo: MS Exchange ofrece al usuario una configuración avanzada.

                      .row
                        .col-lg-12
                          h5.mb-4 8. Estética y diseño minimalista
                          p La información debe ser concisa y directa. Cuando se usa información complementaria empieza a competir con la más importante y se reduce su visibilidad. 
                          .row.justify-content-center.mb-4
                            .col-lg-10
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img22.png', alt='AvatarTop')
                          p.m-0 Ejemplo: la tendencia del diseño actual en la <em>web</em>. Apple, el líder del minimalismo.

                      .row
                        .col-lg-12
                          h5.mb-4 9. Ayudar a los usuarios a reconocer, diagnosticar y solucionar los errores
                          p Cuando aparece un mensaje indicando un error dentro de la navegación, estos deben indicar claramente en qué consiste y esto facilitará al usuario la corrección.
                          .row.justify-content-center.mb-4
                            .col-lg-12
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img23.png', alt='AvatarTop')
                          p.m-0 Ejemplo: este formulario avisa en tiempo real de los errores que cometes al llenarlo.

                      .row
                        .col-lg-12
                          h5.mb-4 10. Ayuda y documentación
                          p En el caso de que el usuario requiera algún tipo de apoyo o ayuda en su recorrido es importante que esta se visualice fácilmente, sea sencilla, útil y de poca extensión. 
                          .row.justify-content-center.mb-4
                            .col-lg-7
                              figure
                                img.img-t.mx-auto(src='@/assets/curso/tema1/img24.png', alt='AvatarTop')
                          p.m-0 Ejemplo: la <em>web</em> de Iberia reserva un espacio importante y fácilmente localizable para la opción de ayuda.

    Separador        

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 1.2 El concepto de accesibilidad
    
    .bg_fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-4 La accesibilidad hace referencia al nivel de acceso universal que puede tener una pieza o un sitio dejando de lado el tipo de <em>software</em>, <em>hardware</em>, infraestructura, idioma, cultura o localización geográfica e incluso capacidades de los usuarios. Un ejemplo claro de esto es la reducción de la accesibilidad a una página cuando esta necesita de un tipo de navegador o componente especial.          
          .row.justify-content-center(data-aos="fade-right") 
            .col-auto.d-none.d-lg-block
              img.img-t(src='@/assets/curso/tema1/img03.svg', alt='')       
            .col-lg-10.col-xl-9.col-xxl-10
              span.color-text1.text-bold Una página es accesible si lo es para cualquier persona, sin importar las circunstancias que puedan dificultar el acceso a la información o si cuenta con alguna discapacidad.  
          p.mt-4 Por consiguiente, la accesibilidad es un elemento esencial que, además, resulta siendo un ejercicio de solidaridad con diversos perfiles de usuario para generar inclusión y no dejar a nadie al margen, un ejemplo muy ilustrativo de esto son las páginas gubernamentales que entregan información y dan soporte a todos los ciudadanos en general. 
        .col-lg-5.mb-4(data-aos="fade-left")
          img.img-t.mx-auto(src='@/assets/curso/tema1/img25.png', alt='')  
      
      .bg_2.p-4.py-3.mb-5
        .row.justify-content-center
          .col-lg-8.col-xl-10.col-xxl-8
            p.text-center.pt-5 Las características principales de la accesibilidad se pueden resumir en el siguiente recurso de aprendizaje:
        
        .bg_3.p-4  
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              img.img-t.mx-auto(src='@/assets/curso/tema1/img27.png', alt='')       
            .col-lg-7(data-aos="fade-left")
              h4.text-center.m-0 Componentes de accesibilidad                          
              SlyderE(indicadores="derecha")
                .row
                  .col-lg-12.mb-4.mb-lg-0.p-3.pe-4
                    h5.mb-4 Contenido <em>web</em>
                    p Todas las partes del sitio <em>web</em> (texto, imágenes, multimedia, códigos de marcado, scripts, aplicaciones, entre otros).

                .row
                  .col-lg-12.mb-4.mb-lg-0.p-3
                    h5.mb-4 Agentes de usuario
                    p Elementos de acceso de los usuarios para el contenido <em>web</em> (navegadores de escritorio, voz, teléfonos móviles, reproductores multimedia y plug-ins).

                .row
                  .col-lg-12.mb-4.mb-lg-0.p-3.pt-5
                    h5.mb-4 Herramientas de autor
                    p Se valen usuarios productores de contenido (editores de código, conversión de documentos, gestión de contenidos, blogs, bases de datos, etc.). 
                    p Los componentes se vinculan y se dan soporte entre sí.

                .row
                  .col-lg-12.mb-4.mb-lg-0.p-3
                    p.mt-5 Es vital establecer los estándares para definir las exigencias de accesibilidad de los componentes. 
                    p.m-0 Algunas de estas son sencillas de atender, con la simple comprensión de cómo una persona con discapacidad usaría la <em>web</em> se pueden identificar e implementar mecanismos de accesibilidad; es importante entender la lógica de navegación de los usuarios, por esto es necesario que participen en ciertas etapas de diseño y en la medida que avanza el proceso de desarrollo. 
        
      p.mb-5 Es importante reconocer la información tangible e interfaz de usuario, con el fin de implementar estrategias desde las siguientes necesidades:

      .row.mb-5(data-aos="fade-down-right")
        .col-lg-12
          TabsC.color-primario.bg_5
            .py-3.py-md-4(titulo="Alternativas de texto para contenido no textual")
              .row.justify-content-center.align-items-center
                .col-md-12.col-lg-4
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema1/img28.svg', alt='')
                .col-md-12.col-lg-6
                  h4.color-text1 Alternativas de texto para contenido no textual
                  ul.lista-ul--color      
                    li
                      i.fas.fa-pen-square
                      | Equivalentes cortos para imágenes, incluyendo iconos, botones y gráficos.
                    li
                      i.fas.fa-pen-square
                      |	Descripción de los datos representados en gráficos, diagramas e ilustraciones.
                    li
                      i.fas.fa-pen-square
                      |	Breves descripciones de contenido no textual, como archivos de audio y vídeo.
                    li
                      i.fas.fa-pen-square
                      |	Etiquetas para controles de formulario, entrada de datos y otros componentes de la interfaz de usuario.           
                    
            .py-3.py-md-4(titulo="Subtítulos y otras alternativas para multimedia")
              .row.justify-content-center.align-items-center
                .col-md-12.col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema1/img29.svg', alt='')            
                .col-md-12.col-lg-6
                  h4.color-text1 Subtítulos y otras alternativas para multimedia
                  ul.lista-ul--color      
                    li
                      i.fas.fa-pen-square
                      | Relatos textuales y subtítulos para contenido de audio.
                    li
                      i.fas.fa-pen-square
                      |	Audiodescripciones, relatos que definen detalles importantes de una pieza audiovisual.
                    li
                      i.fas.fa-pen-square
                      |	Traducción a lenguaje de signos de los audios incluso experiencias auditivas importantes.
              
            .py-3.py-md-4(titulo="Diferentes formas de presentar un contenido")
              .row.justify-content-center.align-items-center
                .col-md-12.col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema1/img30.svg', alt='')
                .col-md-12.col-lg-6
                  h4.color-text1 Diferentes formas de presentar un contenido
                  ul.lista-ul--color      
                    li
                      i.fas.fa-pen-square
                      | Encabezados, listas, tablas, campos de formulario y estructuras de contenido utilicen el marcado apropiado.
                    li
                      i.fas.fa-pen-square
                      |	El orden de la información o la secuencia de instrucciones sean independientes de la presentación.
                    li
                      i.fas.fa-pen-square
                      |	Los navegadores y tecnologías de apoyo facilitan configuraciones para personalizar la presentación.

            .py-3.py-md-4(titulo="Contenido más fácil de ver")
              .row.justify-content-center.align-items-center
                .col-md-12.col-lg-4.mb-5.mb-lg-0
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema1/img31.svg', alt='')
                .col-md-12.col-lg-6
                  h4.color-text1 Contenido más fácil de ver
                  ul.lista-ul--color      
                    li
                      i.fas.fa-pen-square
                      | Elementos diferentes de identificación que no se basen solo en el color.
                    li
                      i.fas.fa-pen-square
                      |	Contrastes de color adecuados que generen visibilidad y legibilidad de los contenidos.
                    li
                      i.fas.fa-pen-square
                      |	Reflujo de texto en ventanas pequeñas y cuando los usuarios hacen el texto más grande.
                    li
                      i.fas.fa-pen-square
                      |	Los textos contenidos en las imágenes se editan en tiempo real, acomodan su tamaño junto con los tamaños de las imágenes o, en lo posible, se evitan.          
            
            .py-3.py-md-4(titulo="Contenido más fácil de escuchar")
              .row.justify-content-center.align-items-center
                .col-md-12.col-lg-4.mb-5.mb-lg-0
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema1/img32.svg', alt='')
                .col-md-12.col-lg-6
                  h4.color-text1 Contenido más fácil de escuchar
                  ul.lista-ul--color      
                    li
                      i.fas.fa-pen-square
                      | Es posible controlar el volumen y el sonido que se reproduce en una página o una interfaz.  
                    li
                      i.fas.fa-pen-square
                      |	Cuando hay un audio de fondo, el volumen debe ser moderado para que no intervenga en la navegación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p.m-0 En general, las características de accesibilidad de un contenido deben estar pensadas en una diversidad amplia de usuarios y ejecutadas y diseñadas con ciertos atributos estéticos y técnicos que aseguren que la mayoría de la población tenga acceso fácil y rápido a la información contenida en las piezas y páginas.  
        .row.justify-content-center.mt-4   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema1/img33.svg', alt='')       
          .col-lg-10.col-xl-9.col-xxl-10
            p.mb-4(data-aos="fade-down") Herramientas como accesos directos desde el teclado permiten recorrer y navegar con mayor agilidad los contenidos y para estos se deben proponer textos legibles y comprensibles que propendan por la claridad en los contenidos; además, los botones, enlaces y menús facilitan el acceso a la información haciendo la página más funcional y versátil.
      .col-lg-5.mb-4(data-aos="fade-left")
        img.img-t.mx-auto(src='@/assets/curso/tema1/img33.png', alt='') 

    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-11.col-xxl-10
        p También es importante conocer los principios para la accesibilidad del usuario. A continuación, se presentan cada uno de ellos.

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p.color-text1 <b>Pensar los factores y componentes de accesibilidad desde la planeación e inicio del proyecto</b>
              p Esto asegurará que el resultado final tenga factores que involucren maneras de percepción y acceso desde diferentes condiciones de usuario.
            .col-lg-4(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img34.png', alt='Texto que describa la imagen')
                
          .row.justify-content-end.align-items-center
            .col-lg-4.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img35.png', alt='Texto que describa la imagen')                
            .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              p.color-text1 <b>Tener en cuenta el tipo de dispositivo desde el que se accede al contenido</b> 
              p Esto es importante para que el diseño sea adaptable e incrementar la experiencia de usuario, para hacer más fácil la navegación y aumentar la usabilidad. 
              
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p.color-text1 <b>Utilizar las herramientas con funcionalidad enfocada en accesibilidad</b> 
              p Es importante emplear <em>software</em> que permita corrección y revisión de errores en los contenidos y en el acceso a la información documentada, y que brinde un diagnóstico automático que se realiza con instrucciones detalladas para el usuario.       
            .col-lg-4(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img38.png', alt='Texto que describa la imagen')

          .row.justify-content-end.align-items-center
            .col-lg-4.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img36.png', alt='Texto que describa la imagen')                
            .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              p.color-text1 <b>El contraste de color es imprescindible</b> 
              p Los colores entre el fondo y los textos proporcionan la distinción de los elementos de diseño, para que la navegación sea una tarea fácil no solo para personas con discapacidad, sino para todos en general; aplica a imágenes, gráficos, tablas y cajas de texto.
              
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p.color-text1 <b>Incluir descripciones alternativas</b> 
              p Apoyar contenidos con descripciones y subtítulos en imágenes, gráficos, videos y figuras asegurará la comunicación y comprensión de la información, convirtiéndose esto en un valor añadido del proyecto.
            .col-lg-4(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img37.png', alt='Texto que describa la imagen')

    .bg_6.p-4(data-aos="fade-down-right")
      p.mb-4 Es importante revisar el siguiente esquema propuesto por Castillo (2020), donde se podrá tener una visión general de los elementos relacionados con las temáticas que se vienen abordando de accesibilidad y usabilidad, esto ayudará a realizar un mejor diseño de las piezas multimediales o el diseño de la página <em>web</em>:
      .row.justify-content-center
        .col-lg-9
          figure.mb-4
            img.img-t(src='@/assets/curso/tema1/img40.svg', alt='')
          figcaption.text-center.bg_5.mb-5 Nota. Tomada de Castillo (2020).


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
