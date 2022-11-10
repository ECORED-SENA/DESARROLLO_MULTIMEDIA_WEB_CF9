<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Aplicación de instrumentos de usabilidad y accesibilidad

    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        p.m-0 Existen muchos métodos de prueba que permiten evaluar la usabilidad de los sitios <em>web</em>, partiendo del análisis de pequeños grupos de usuarios, hasta cientos o miles, así como lo hacen en las encuestas o los grupos de enfoque que son más sectorizados, todos estos dependen de los alcances propuestos y los resultados esperados.
        .row.justify-content-center.mt-4   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema2/img02.svg', alt='')       
          .col-lg-10.col-xl-9.col-xxl-10
            p.mb-4(data-aos="fade-down") Para verificar la optimización de los sitios <em>web</em>, se debe incrementar la relación con los usuarios aumentando la cantidad de visitas lo que permitirá medir el uso y la interacción de los usuarios con las herramientas y elementos que se disponen en los contenidos <em>web</em>.
        p.m-0 Es importante recordar que los criterios a tener presente para la medición de la accesibilidad y la usabilidad tienen como base la experiencia óptima del usuario, y que se debe propender por un diseño acorde y con una estética conceptual. 
      .col-lg-5.mb-4(data-aos="fade-left")
        img.img-t.mx-auto(src='@/assets/curso/tema2/img01.svg', alt='') 

    Separador
    
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
      h2 2.1 Las pruebas y sus tipos

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4(data-aos="fade-right")
        img.img-t.mx-auto(src='@/assets/curso/tema2/img03.png', alt='') 
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-5 Son técnicas creadas para evaluar las opciones de accesibilidad, usabilidad y demás que entregan información pertinente para el análisis de los usuarios en tiempo real; teniendo la posibilidad de realizar las siguientes preguntas: ¿cómo resolverlo? o ¿cómo hacerlo? y que sea el mismo usuario de manera autónoma quien las resuelva, en contraste con otras metodologías donde expertos son los encargados de evaluar las interfaces.
        p.m-0 Es importante conocer los tipos de pruebas, por eso en el siguiente recurso de aprendizaje se abordarán las más reconocidas:

    .row.justify-content-center
      .col-md-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t(src='@/assets/curso/tema2/img04.png')
      .col-md-8.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Pasillo de pruebas") Permiten analizar características generales para todos los perfiles con el fin de identificar características de complicidad y usabilidad. <br><br>Es una opción rápida y económica  en la que se seleccionan los participantes al azar, esto ayuda a que la muestra contemple variabilidad de los individuos ya que sus perfiles, cualidades, percepciones y habilidades son diferentes. 
          
          p(numero="2" titulo="Prueba de usabilidad remota") En escenarios de usabilidad es habitual que los usuarios pertenezcan a diferentes regiones y zonas horarias, convirtiendo este aspecto en un reto. <br><br>Este tipo de pruebas permiten que usuarios en diferentes regiones aporten datos e información valiosos, pero se pueden presentar inconvenientes al momento de comunicarlas en un horario no hábil, o que no se cuente con el registro exacto de cuál fue el usuario que realiza la prueba.
          
          p(numero="3" titulo="Metodologías asíncronas") Es un registro automático que se obtiene cuando un usuario navega en un sitio, permitiendo saber cómo fue su recorrido, los clics realizados, tiempos y comportamiento dejando una retroalimentación concisa al mostrar errores o incidentes mientras se interactuaba. <br><br>Esta información es relevante para las empresas, con el fin de comprender sus usuarios, lo que ellos que hacen y cómo se desenvuelven al momento de navegar por un sitio <em>web</em>. 
          
          p(numero="4" titulo="Heurística de Nielsen ") Presenta los elementos que se deben considerar al momento de evaluar el diseño de las interfaces de usuario:<br><br> - Visibilidad del estado del sistema. <br> - Utilizar el lenguaje de los usuarios. <br>	- Control y libertad para el usuario. <br> - Consistencia y estándares. <br> - Prevención de errores. <br> - Minimizar la carga de la memoria del usuario. <br> - Flexibilidad y eficiencia de uso. <br> - Diagnósticos estéticos y diseño minimalista. <br> - Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de los errores. <br> - Ayuda y documentación. 

          p(numero="5" titulo="Test A/B") Prueba aleatoria con 2 variantes (A y B) siendo una la variante y la otra la que controla. Consiste en comparar dos opciones con leves cambios que afectan directamente los comportamientos de los usuarios. <br><br>Se utilizan dos opciones exactas con  contenido diferente y al priorizar alguno se obtendrán resultados. <br><br>Se pueden encontrar variantes donde la intención de la prueba es comparar y se mantiene una sola variante que controla, así se obtienen más datos sobre las mismas pruebas siendo más económico, pero sus resultados pueden ser sesgados. 
        
    Separador 

    .bg_fondo1-t2
      #t_2_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
          h2 2.2 Los indicadores de usabilidad

      p.mb-5 La usabilidad no solo se pone a prueba, generalmente se mide por indicadores que son tanto cuantificables como observables y de estos se pueden obtener resultados más visibles y concretos que permitirán tomar las medidas requeridas. A continuación, se mencionan los más relevantes.

      .row.justify-content-center(data-aos="fade-down-right") 
        .col-lg-10.col-xl-12.col-xxl-10
          SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
              h5.text-white.text-center Tasa de tareas realizadas
              p.text-center Indica y contabiliza de manera binaria, (0 = sí ; 1 = no), resultados cien por ciento efectivos, permitiendo conocer respuestas en tiempo real.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
              h5.text-white.text-center Problemas de usabilidad
              p.text-center Revela problemas que los usuarios encuentran en cada fase, se obtienen estadísticas de la cantidad de problemas, frecuencia y localización. 

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
              h5.text-white.text-center Tiempo completado de una tarea
              p.text-center  Mide eficiencia y productividad, registra todo el tiempo que tomó realizar una tarea. 

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
              h5.text-white.text-center Nivel de satisfacción de una tarea
              p.text-center Sirve para indicar las dificultades encontradas por los usuarios.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
              h5.text-white.text-center Nivel de satisfacción de prueba
              p.text-center Recoge impresiones de los usuarios al realizar tareas o en el momento del uso general.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
              h5.text-white.text-center Errores
              p.text-center Recoge toda acción involuntaria, error o acción que se haya cometido, toda acción viene acompañada de una descripción y ayuda a comprender cómo el usuario se desenvuelve, los errores son acciones a las que se les debe prestar mucha atención, pues son la base de la usabilidad. 

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
              h5.text-white.text-center Expectativas
              p.text-center Estima el nivel de dificultad frente a la solución planteada al realizar una tarea. 

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
              h5.text-white.text-center Páginas vistas/clics
              p.text-center Es una de las métricas más fiable, al contabilizar la cantidad de clics, demostrando relaciones directas con las tareas realizadas.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
              h5.text-white.text-center Conversión
              p.text-center Mide la efectividad con la que se solucionan o se completa una tarea, se afecta por factores como errores y problemas de usabilidad.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
              h5.text-white.text-center SUM
              p.text-center <em>(Single Usability Metric)</em>: describe la usabilidad mediante los indicadores de tasa de tareas completadas, tiempo de completado de una tarea y el nivel de satisfacción.

            .tarjeta.color-secundario.p-4.h_1
              .row.justify-content-center.mb-3
                .col-8
                  img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
              h5.text-white.text-center SUS
              p.text-center <em>(System Usability Scale)</em>: mide la usabilidad en un cuestionario de 10 preguntas con una escala de puntuación Likert.   

      Separador.

      #t_2_3.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
          h2 2.3 Las herramientas

    .row.justify-content-center.mt-4   
      .col-auto.d-none.d-lg-block
        img.img-t(src='@/assets/curso/tema2/img02.svg', alt='')       
      .col-lg-10
        p.mb-4(data-aos="fade-down") Cuando se tiene una mala experiencia con una página <em>web</em> es posible que el 88% de los usuarios de primera experiencia planteen no volver a ingresar; al igual que casi el 40% cierran las pestañas si los elementos tardan en cargar. Este tipo de situaciones obligan a la revisión del contenido y, además de examinar los problemas que pueden construir una mala imagen en el ideal de los usuarios, algunas herramientas ayudarán y mejorarán la optimización de las páginas <em>web</em> y aportan desde el marco de la usabilidad y la accesibilidad.

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .bg_4.p-3
          h4.text-white.m-0 Herramientas para mejorar la usabilidad
    
    p Es importante explorar las herramientas que ayudan a mejorar la experiencia del usuario, en pro de una mejor usabilidad: 

    .bg_fondo2-t2.mb-5.p-4(data-aos="fade-down-right")
      .row.justify-content-center.mb-5 
        .col-lg-11
          .bg_fondoslyder-t2.py-5.px-2
            SlyderF.mb-4(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg_5.p-4.h_2
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-t.mx-auto.mt-4.mb-3(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
                p.text-center <b>Clarity:</b> es una herramienta gratuita de Microsoft, que permite visualizar experiencias de usuario, aporta estadísticas y mapas de calor, se ancla con aplicaciones como Google Analytics, lo que ayuda que los datos sean más detallados.
                p.text-center ¿Cómo funciona Clarity? Se puede ver en el siguiente enlace: 
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=smPeZg5Ts6c" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.t1_text <b>Enlace web.</b> Clarity PPM - Modern UX Roadmaps: Access My Tasks

              .tarjeta.bg_5.p-4.h_2
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-t.mx-auto.mt-1(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
                p.text-center <b>Hotjar:</b> es una herramienta top de consulta de datos, presenta mapas de calor y grabaciones en tiempo real de comportamientos de usuario, esta aplicación se adapta a las necesidades de los usuarios y cuenta con una versión paga. 
                p.text-center ¿Cómo funciona HotJar? Se puede ver en el siguiente enlace:  
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2DPIqN_L9DE&t=8s" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.t1_text <b>Enlace web.</b> HOTJAR Tutorial. Mapa de Calor con WordPress

              .tarjeta.bg_5.p-4.h_2
                .row.justify-content-center
                  .col-8.my-3
                    img.img-t.mx-auto.mt_1(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
                p.text-center  <b>Crazyegg:</b> permite insertar líneas de código en JavaScript, donde se analizará todo lo que un usuario hace en una navegación, mapas de calor y seguimiento de clics. Se puede conseguir una prueba por 30 días, es una versión paga con tarifas mensuales o anuales.
                p.m-0.text-center Mapas de calor con CrazyEgg: (recurso en inglés, con subtítulos en español) Se puede ver en el siguiente enlace: 
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=mFuPz6oOD48&pp=ugMICgJlcxABGAE%3D" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.t1_text <b>Enlace web.</b> How To Use Heatmaps To Track Clicks On Your Website With CrazyEgg

              .tarjeta.bg_5.p-4.h_2
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-t.mx-auto.mt-4.mb-4(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
                p.text-center <b>Uxpressia:</b> desglosa parte por parte las experiencias de los usuarios, utilizando plantillas personalizables, creando mapas, proyectos y necesidades específicas.
                p.text-center.mb-4 Mapas de navegación con UXPressia. Se puede ver en el siguiente enlace:  
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=iTgMSSB9rEU" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.t1_text <b>Enlace web.</b> Customer Journey Map con Uxpressia

      .row.mb-4(data-aos="fade-right")
        .col-auto
          .bg_4.p-3
            h4.text-white.m-0 Herramientas para mejorar la accesibilidad

      p.mb-5 Es importante explorar las herramientas que ayudan a mejorar la experiencia del usuario, en pro de una mejor accesibilidad: 

      .row.align-items-center
        .col-12.col-lg-4
          figure(data-aos="fade-right")
            img.img-t.mx-auto(src='@/assets/curso/tema2/img20.png')
        .col-12.col-lg-8(data-aos="fade-left")
          .bg_slyder1.p-5
            SlyderA(tipo="b").color_slyder-a_botones
              .row.justify-content-center.mb-4
                .col-lg-3.mb-4
                  figure
                    img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img21.svg', alt='AvatarTop')
                .row.mb-4
                  .col-lg-12              
                    p.text-center.m-0 <b>Wave:</b> con solo copiar y pegar la URL, esta herramienta accede y evalúa todos los problemas de accesibilidad y aporta útiles consejos para mejorar el acceso de la información, especialmente a los usuarios que tienen discapacidades. 
                    p.text-center Es gratuita y fácil de usar.
                    p.text-center Wave para principiantes:
                .row.justify-content-center.mb-4
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=Dn8_8sFWpvs&pp=ugMICgJlcxABGAE%3D" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.t1_text <b>Enlace web.</b> How To Use Wave | Wave For Beginners | Wave Accounting Software Tutorial (2022)

              .row.justify-content-center.mb-4
                .col-lg-3.mb-4
                  figure
                    img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img22.svg', alt='AvatarTop')
                .row.mb-4
                  .col-lg-12              
                    p.text-center <b>Blisk:</b> es útil para comprobar cómo se visualizan las páginas en los diferentes buscadores, simulando opciones de carga lenta y con errores, prueba la accesibilidad desde diferentes elementos como computadores o móviles; se puede encontrar una versión gratuita o una de pago mensual.
                    p.text-center Navegadores para desarrolladores:                    
                .row.justify-content-center.mb-4
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=BGkzKfbrO6c" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.t1_text <b>Enlace web.</b> Blisk: Web Browser for Developers & Front-End Designers
                      
              .row.justify-content-center.mb-4
                .col-lg-3.mb-4
                  figure
                    img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img23.svg', alt='AvatarTop')
                .row.mb-4
                  .col-lg-12              
                    p.text-center <b>W3C:</b> esta herramienta examina y detecta errores de código HTML, XHTML y XMIL, es de uso gratuito y combinada con otras herramientas como Wave suplen otras herramientas de pago con bastantes funciones.
                    p.text-center Validación con W3C:                    
                .row.justify-content-center.mb-4
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=LMPNGCjkKGI" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.t1_text <b>Enlace web.</b> El W3C Validator
                      
              .row.justify-content-center.mb-4
                .col-lg-4.mb-4
                  figure
                    img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img24.svg', alt='AvatarTop')
                .row.mb-4
                  .col-lg-12              
                    p.text-center <b>Checkmycolours:</b> herramienta que ayuda a medir el nivel de lectura a través del contraste de colores entre los textos y los fondos de las diferentes páginas. Es gratuita. 
                    p.text-center Como chequear los colores:
                .row.justify-content-center.mb-4
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=LBmLspdAtxM" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.t1_text <b>Enlace web.</b> How to check for accessible colors -- A11ycasts #17
                      
              .row.justify-content-center.mb-4
                .col-lg-3.mb-4
                  figure
                    img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img25.svg', alt='AvatarTop')
                .row.mb-4
                  .col-lg-12              
                    p.text-center <b>Legible:</b> es una herramienta propia para el lenguaje español, ayuda a calcular el índice de legibilidad de acuerdo con parámetros como: tiempo estimado de lectura y el grado de formación necesaria para la comprensión de un texto o documento, utilizando fórmulas que priorizan la lengua española. 
                    p.text-center Análisis de textos:
                .row.justify-content-center.mb-4
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=RotVbqMGXLo" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.t1_text <b>Enlace web.</b> Herramientas Análisis de Textos
 
    .row.mb-4.mt-5.mt_2(data-aos="fade-right")
      .col-auto
        .bg_4.p-3
          h4.text-white.m-0 Herramientas para mejorar la navegabilidad

    p.mb-5 Es importante explorar las herramientas que ayudan a mejorar la experiencia del usuario, en pro de una mejor navegabilidad:

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_7.p-4.h-100
          .row.justify-content-center
            .col-lg-5
              figure.mb-4
                img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img26.svg', alt='AvatarTop')
            p.text-bold.text-center Miro
          p.text-center Herramienta colaborativa para la construcción de elementos en equipo, realizar mapas, diagramas, flujos de navegación y diseñar visualizaciones. Cuenta con versión gratuita y paga. 
          p.text-center ¿Cómo funciona Miro? En el siguiente video lo explican:

          .row.justify-content-center.mb-4
            .col-lg-11
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=pATeJdGUExE" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.t1_text <b>Enlace web.</b> How Miro does UX Research using Miro

      .col-lg-4.mb-4.mb-lg-0
        .bg_7.p-4.h-100
          .row.justify-content-center
            .col-lg-5
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema2/img27.svg', alt='AvatarTop')
            p.text-bold.text-center Figma
          p.text-center Tiene un foco en el diseño UX permitiendo diseñar, prototipar y compartir wireframes con otros usuarios. Entrega versiones gratuitas y otras de pago enfocadas a profesionales y grandes empresas.
          p.text-center Figma desde cero:

          .row.justify-content-center.mb-4
            .col-lg-11
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=FoCNedUiVqU" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.t1_text <b>Enlace web.</b> Curso Figma desde cero - Aprende a diseñar en equipo y en tiempo real

      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .bg_7.p-4.h-100
          .row.justify-content-center
            .col-lg-6
              figure.mb-4
                img.img-t.mx-auto.mt-5(src='@/assets/curso/tema2/img28.svg', alt='AvatarTop')
            p.text-bold.text-center Sketch App
          p.text-center.mx-4 Una opción dirigida a diseñadores, con interfaces intuitivas, que usen componentes y escalables y en tiempo real, a diferencia de Figma, solo es posible por un pago mensual.
          p.text-center Aprender a prototipar:

          .row.justify-content-center.mb-4
            .col-lg-11
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=GtLNaFE6xlox" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.t1_text <b>Enlace web.</b> Prototipado rápido con la aplicación Sketch - Sketch: Noob to Master, ep10
 
    .row.mb-4(data-aos="fade-right")
      .col-auto
        .bg_4.p-3
          h4.text-white.m-0 Foco de atención, rendimiento de página y de test A/B

    p.mb-5 Es importante explorar las siguientes herramientas que ayudan a mejorar el desempeño en las páginas:

    .bg_fondo5-t2(data-aos="fade-right")
      .bg_fondo4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-3.mt-4.mt-lg-0
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img29.svg', alt='')
          .col-lg-8.mt-4
            .bg_slyder1-2.mb-4
              SlyderE(indicadores="derecha").color_slyder-a_botones
                .row.justify-content-center
                  .col-lg-10.px-5.px-lg-0
                    figure.mb-4
                      img.img-t.mx-auto(src='@/assets/curso/tema2/img30.svg', alt='AvatarTop') 
                    h5.mb-4 Attention Insight
                    p Aporta al foco de atención, se basa en la capacidad de Inteligencia Artificial (IA) para detectar elementos que provocan atención al visitante, es importante al momento de plantear una estrategia que se basa en el diseño, no necesita de usuarios reales para esperar resultados; posee una opción demo y otras de pago.
                    p.mb-4 ¿Cómo funciona Attention Insight?
                    .row
                      .col-lg-8
                        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=1Z4FJKIPn3U" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p.t1_text <b>Enlace web.</b> How to Use Attention Insight App | AI

                .row.justify-content-center
                  .col-lg-10.px-5.px-lg-0               
                    figure.mb-4
                      img.img-t(src='@/assets/curso/tema2/img31.svg', alt='AvatarTop') 
                    h5.mb-4 Page Speed Insight
                    p Esta herramienta forma parte de la familia de Google y su función es evaluar cada página que ellos consideran frente a unas prácticas de rendimiento; enfocada para desarrolladores que tienen la posibilidad de extraer el reporte, para generar sus cambios.
                    p.mb-4 Tutorial y optimización:
                    .row
                      .col-lg-8
                        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=oF1Eja0Id2A" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p.t1_text <b>Enlace web.</b> Tutorial Google PageSpeed - 2019

                .row.justify-content-center
                  .col-lg-10.px-5.px-lg-0                
                    figure.mb-4
                      img.img-t(src='@/assets/curso/tema2/img32.svg', alt='AvatarTop') 
                    h5.mb-4 Pingdom Tool
                    p Realiza una prueba rápida de velocidad con la que se cargan los elementos de una página <em>web</em>, altamente útil al momento de optimizar los tiempos de carga; herramienta de pago mensual. 
                    p.mb-4 ¿Cómo usar Pigdom Tools?
                    .row
                      .col-lg-8
                        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=5-V7nNdOtjs" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p.t1_text <b>Enlace web.</b> Cómo usar e interpretar Pingdom Tools para medir la velocidad de una <em>web</em>

                .row.justify-content-center
                  .col-lg-10.px-5.px-lg-0                   
                    figure.mb-4
                      img.img-t(src='@/assets/curso/tema2/img33.svg', alt='AvatarTop') 
                    h5.mb-4 Google Optimize
                    p Identifica las experiencias de los usuarios con las que más los atraen, se basa en las herramientas analíticas de Google. Es gratis y se integra con otras aplicaciones de Google generar mejores resultados.
                    p.mb-4 ¿Qué es Google Optimize?
                    .row
                      .col-lg-8
                        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=jqKdzMV8pNY" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p.t1_text <b>Enlace web.</b> Curso Google Optimize [VÍDEO #1]: ¿Qué es Google Optimize y cómo instalarlo?

                .row.justify-content-center
                  .col-lg-10.px-5.px-lg-0                   
                    figure.mb-4
                      img.img-t(src='@/assets/curso/tema2/img34.svg', alt='AvatarTop') 
                    h5.mb-4 Optimizely
                    p Tiene características parecidas las ofrecidas por Google, pero con el plus de potenciar los proyectos digitales con sus propias herramientas, comprueba funciones, toma decisiones frente a otros datos y se apoya de prueba para la toma de decisiones.
                    p.mb-4 Introducción a Optimizely:
                    .row
                      .col-lg-8
                        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=dEb2rxuCfUc" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p.t1_text <b>Enlace web.</b> Introduction to Optimizely

      .row.justify-content-center.mb-4
        .col-lg-10(data-aos="fade-right")
          .bloque-texto-a.color-secundario.p-md-5
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8.mb-4.mb-lg-0
                .bloque-texto-a__texto.p-4
                  p La finalidad de todas estas herramientas es poder comunicar de una mejor manera las ideas que se quedan cortas al momento de expresar los conceptos en las páginas <em>web</em>, ya que las personas que hoy visitan el día de mañana se convertirán en futuros clientes, mejorando las experiencias de los usuarios.           
              .col-lg-4
                img(src='@/assets/curso/tema2/img35.png' alt='AvatarTop') 


</template>

<script>
export default {
  name: 'Tema2',
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
