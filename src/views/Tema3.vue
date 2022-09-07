<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Informes de pruebas de usabilidad y accesibilidad

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon-b.color-secundario.p-3
          p Las evaluaciones que se realizan para encontrar soluciones o simple información de cómo se trabajan con los métodos habituales, proporcionan una visión muy válida al momento de realizar pruebas de usabilidad; por eso, a continuación se indican las consideraciones a tener presente al momento de elaborar informes o reportes.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img01.svg', alt='')

    .bg_fondo1-t3.mb-5
      .row.justify-content-center
        .col-lg-12
          .bg_fondo2-t3
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img02.svg', alt='')
              .col-lg-8.mt-4
                .bg_slyder-t3.mb-4
                  .p-5
                    SlyderE(indicadores="derecha").color_slyder-a_botones
                      .row
                        .col-lg-12
                          h4.mb-4 Distinguir entre problemas de accesibilidad y de usabilidad
                          p Cuando se empieza a trabajar en la construcción de un producto o proyecto, no se piensa comúnmente en diferenciar estas características, pues existe una zona gris donde comparten elementos, pero es importante empezar a construir conceptos que puedan ayudar a diferenciarlos.                        
                          figure
                            img.img-t(src='@/assets/curso/tema3/img04.png', alt='AvatarTop')
                          
                      .row
                        .col-lg-12
                          h4.mb-4 Incluir parámetros relevantes del estudio
                          p Es necesario que la información que se relaciona sea relevante, actualizada y contable, por eso es importante apoyarse en las herramientas disponibles que entregan datos para el informe y algunos parámetros de evaluación; además, no se pueden a un lado las características de los usuarios, ser objetivos al momento de escoger las pruebas de usabilidad y garantizar que no se relacionen datos incorrectos.                        
                          figure
                            img.img-t(src='@/assets/curso/tema3/img06.png', alt='AvatarTop')

                      .row
                        .col-lg-12
                          h4.mb-4 Elaborar las conclusiones
                          p Se deben entregar los resultados reales, y por más cortos que sean estos es importante ser concreto al expresar las conclusiones; al igual es una muestra clara y representativa de los usuarios, conociendo si los resultados fueron los esperados.                        
                          figure
                            img.img-t(src='@/assets/curso/tema3/img05.png', alt='AvatarTop')
                      
                      
</template>

<script>
export default {
  name: 'Tema3',
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
