<script>
  export let images;

  // let sliderCenterIndex = 0;
  // let sliderLeftIndex = images.length -1;
  // let sliderRightIndex = 1;

  // function sliderMoveLeft(){
  // const len = images.length;
  // sliderCenterIndex = (sliderCenterIndex - 1 +len) % len;
  // sliderLeftIndex = (sliderLeftIndex -1 + len) % len;
  // sliderRightIndex = (sliderRightIndex +1) % len;
  // }

  // function sliderMoveRight(){
  // const len = images.length;
  // sliderCenterIndex = (sliderCenterIndex +1 +len) % len;
  // sliderLeftIndex = (sliderLeftIndex -1 + len) % len;
  // sliderRightIndex = (sliderRightIndex +1) % len;
  // }

  let sliderCenterIndex = 0;
  $: sliderLeftIndex = (sliderCenterIndex -1 + images.length) % images.length;
  $: sliderRightIndex = (sliderCenterIndex +1 ) % images.length;
  function sliderMoveLeft(){
  const len = images.length;
  sliderCenterIndex = (sliderCenterIndex - 1 +len) % len;
  }

  function sliderMoveRight(){
  const len = images.length;
  sliderCenterIndex = (sliderCenterIndex +1) % len;
  }
</script>

<div class="slider">
  <img src="{images[sliderLeftIndex]}" alt="スライダー左" class="slider-item left">
  <img src="{images[sliderCenterIndex]}" alt="スライダー" class="slider-item">
  <img src="{images[sliderRightIndex]}" alt="スライダー右" class="slider-item right">
  <button class="slider-left-button" on:click={sliderMoveLeft}>←</button>
  <button class="slider-rigth-button" on:click={sliderMoveRight}>→</button>
</div>

<style>
  /* slider */
  .slider {
    position: relative;
    width: 80%;
    margin: 0 10%;
  }

  .slider-item {
    width: 100%;
  }

  .slider-item.left{
    position: absolute;
    top: 0;
    right: 100%;
  }
  .slider-item.right{
    position: absolute;
    top: 0;
    left: 100%;
  }

  .slider-left-button {
    position: absolute;
    top: 50%;
    right: 100%;
  }
  .slider-rigth-button{
    position: absolute;
    top: 50%;
    left: 100%;
  }
</style>