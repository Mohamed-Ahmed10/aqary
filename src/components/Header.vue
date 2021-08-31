<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-6 header_content">
          <h1>{{$t('header.h1')}}</h1>
          <p>{{$t('header.p')}} </p>
          <div class="btns_container">
            <button class="btn1">{{$t('header.open')}}</button>
            <button class="btn2">{{$t('header.explore')}}</button>
          </div>
        </div>
        <div class="col-6">
          <img src="../assets/iPhone.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  min-height: calc(100vh - 100px);

  .header_content {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  img {
    max-width: 100%;
    margin-top: 40px;
  }
  @mixin button_styles {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 170px;
    transition: 0.2s ease-in-out;
    margin: 10px;

    &:hover {
      box-shadow: 3px 3px 3px 1px #d0d0d0;
    }
  }
  .btn1 {
    @include button_styles();
    color: #fff;
    background-color: #1dbabf;
  }
  .btn2 {
    @include button_styles();
    color: #1dbabf;
    background-color: #fff;
    border: 1px solid #eee;
  }
}
</style>

<script>
export default {
  name: "Header",
};
</script>