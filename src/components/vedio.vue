<template>
  <div class="vedio">
    <div class="container">
      <h2>Explore app for the next genertation</h2>
      <h2>watch the vedio</h2>
      <div class="content">
        <div class="overlay">
          <div id="play" @click="playVideo">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vedio {
  margin-bottom: 100px;
}
.content {
  position: relative;
  width: 70%;
  margin: 0 auto;
  min-height: 400px;

  .overlay {
    position: absolute;
    background: #ccc;
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  #play {
    position: absolute;
    top: 40%;
    left: 46%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
  }
  video {
    width: 100%;
    display: block;
    z-index: 1;
  }
}
</style>
