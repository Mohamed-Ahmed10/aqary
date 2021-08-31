<template>
  <div class="how">
    <div class="container">
      <h2>{{ $t("how.h2") }}</h2>
      <p>{{ $t("how.p1") }}</p>
      <div class="row">
        <div class="col">
          <div class="how_content">
            <i class="fas fa-search fa-3x"></i>
            <h3>{{ $t("how.h3") }}</h3>
            <p>{{ $t("how.p2") }}</p>
          </div>
        </div>
        <div class="col">
          <div class="products">
            <div class="product">
              <img
                src="../assets/appartment.png"
                alt="this is image for appartment"
                srcset=""
              />
              <span>{{ $t("how.product1") }}</span>
            </div>
            <div class="product">
              <img
                src="../assets/clinic.png"
                alt="this is image for clinic"
                srcset=""
              />
              <span>{{ $t("how.product2") }}</span>
            </div>
            <div class="product">
              <img
                src="../assets/home.png"
                alt="this is image for home"
                srcset=""
              />
              <span>{{ $t("how.product3") }}</span>
            </div>
            <div class="product">
              <img
                src="../assets/office.png"
                alt="this is image for office"
                srcset=""
              />
              <span>{{ $t("how.product4") }}</span>
            </div>
            <div class="product">
              <img
                src="../assets/shop.png"
                alt="this is image for shop"
                srcset=""
              />
              <span>{{ $t("how.product5") }}</span>
            </div>
            <div class="product">
              <img
                src="../assets/villa.png"
                alt="this is image for villa"
                srcset=""
              />
              <span>{{ $t("how.product6") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how {
  h2 {
    margin: 20px 0;
  }
  p {
    margin: 30px 0;
  }
  .row {
    justify-content: center;

    .how_content {
      text-align: left;
      margin: 0 11%;

      i {
        color: #1fbaba;
      }
    }
  }
  .products {
    width: 80%;
    padding: 10% 0;
    background-color: #1fbaba;
    box-shadow: 5px 5px 4px #eee;

    .product {
      width: 46%;
      background: #fff;
      margin: 5px;
      padding: 10px;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;

      img {
        height: 40px;
      }
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>