<template>
  <div id="home" class="front-layout">
    <!-- BEGIN HEADER -->
    <gymlog-out-header></gymlog-out-header>
    <!-- END HEADER -->

    <!--BEGIN CAROUSEL-->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide img-responsive" src="../assets/img/sliderimgone.jpg">
          <div class="container">
            <div class="carousel-caption">
              <h1>BECOME YOUR STRONGEST SELF</h1>
              <p>Have that body build you have always admired</p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="second-slide img-responsive" src="https://toughmotivation.files.wordpress.com/2013/01/gym-2.jpg">
          <div class="container">
            <div class="carousel-caption">
              <h1>CONSISTENT PROGRESS</h1>
              <p>Keep logs of all your gyming activities</p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="third-slide img-responsive" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/usa-and-canada/texas/dallas/spa/rcdls_Fitness_cntr_ls_v1.png?$XlargeViewport100pct$">
          <div class="container">
            <div class="carousel-caption">
              <h1>HIGHLY MOTIVATING</h1>
              <p>Keeps you on track to reach your goals</p>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- END CAROUSEL -->

    <!-- BEGIN FOOTER -->
    <gymlog-out-footer></gymlog-out-footer>
    <!-- END FOOTER -->

  </div>
</template>

<script>
   import Header from './outlayout/Header.vue'
   import Footer from './outlayout/Footer.vue'

  export default{
    data(){
      return{

      }
    },
    components:{
      'gymlog-out-header': Header,
      'gymlog-out-footer': Footer,
    }
  }
</script>

<style>
  /* GLOBAL STYLES

  /* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */
  /* Carousel base class */
  
  .carousel {
    height: 700px;
    width: 100%;
    margin-bottom: 60px;
  }
  /* Since positioning the image, we need to help out the caption */
  
  .carousel-caption {
    color: #f89c2c;
    margin-top: 300px;
    z-index: 10;
  }
  /* Declare heights because of positioning of img element */
  
  .carousel .item {
    height: 700px;
    width: 100%;
    background-color: #777;
  }
  
  .carousel-inner>.item>img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  /* RESPONSIVE CSS
-------------------------------------------------- */
  
  @media (min-width: 768px) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 20px;
      font-size: 21px;
      line-height: 1.4;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .carousel-caption {
      top: 46%;
    }
  }
  
  @media (min-width: 992px) {
    .featurette-heading {
      margin-top: 120px;
    }
  }
  
  @media (max-width: 1024px) {
    .carousel {
      height: 400px;
    }
    .carousel .item {
      height: 400px;
    }
  }

  @media (max-width: 768px) {
    .carousel {
      height: 300px;
    }
    .carousel .item {
      height: 300px;
    }
  }

  @media (max-width: 480px) {
    .carousel {
      height: 200px;
    }
    .carousel .item {
      height: 200px;
    }
  }

  .outfooter {
    text-align: center;
    width: 100%;
  }
</style>