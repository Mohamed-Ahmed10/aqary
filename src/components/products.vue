<template>
  <div id="products">
    <div class="container">
      <h4>{{ $t("products.h4") }}</h4>
      <div class="row">
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/appartment.png"
              alt="this is image for appartment"
              srcset=""
            />
            <span>{{ $t("products.product1") }}</span>
          </div>
        </div>
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/clinic.png"
              alt="this is image for clinic"
              srcset=""
            />
            <span>{{ $t("products.product2") }}</span>
          </div>
        </div>
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/home.png"
              alt="this is image for home"
              srcset=""
            />
            <span>{{ $t("products.product3") }}</span>
          </div>
        </div>
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/office.png"
              alt="this is image for office"
              srcset=""
            />
            <span>{{ $t("products.product4") }}</span>
          </div>
        </div>
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/villa.png"
              alt="this is image for villa"
              srcset=""
            />
            <span>{{ $t("products.product4") }}</span>
          </div>
        </div>
        <div class="col-2">
          <div class="box">
            <img
              src="../assets/shop.png"
              alt="this is image for shop"
              srcset=""
            />
            <span>{{ $t("products.product4") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#products {
  margin: 40px 0;

  h4 {
    margin: 40px 0;
  }

  .box {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 170px;
    width: 170px;
    margin: 15px 5px;
    padding: 20px 0;
    box-shadow: 5px 4px 5px #eee, -5px -5px 5px #eee;
    cursor: pointer;
    img {
      max-width: 50%;
    }
    span {
      text-transform: capitalize;
    }
    &:hover span {
      color: #1fbaba;
      cursor: context-menu;
    }
  }
}
</style>

<script>
export default {
  name: "Products",
};
</script>