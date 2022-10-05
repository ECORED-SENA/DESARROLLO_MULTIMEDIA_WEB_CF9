<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    .bloque-texto-a.color-secundario.p-4.mb-5 
      .row.m-0.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img.img-t.mx-auto(src='@/assets/curso/introduccion/imgintro.svg')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.m-0 Le invitamos a revisar el siguiente video para comprender algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca de la 
             span.color-text1.text-bold usabilidad y accesibilidad de los elementos gráficos, 
             | audiovisuales e interactivos de este componente formativo:

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/gy78yUR1WgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
