<template>
  <div class="sell">
    <div class="container">
      <div class="row">
        <div class="col-5 left_one">
          <img src="../assets/best_seller.png" alt="best seller" srcset="" />
        </div>
        <div class="col-7 right_one">
          <img src="../assets/toggle.png" alt="shopping card" srcset="" />
          <h4>{{ $t("sell.h4_1") }}</h4>
          <p>{{ $t("sell.p1") }}</p>
          <button type="button" class="btn btn-lg">{{ $t("sell.btn") }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-7 left_two">
          <img src="../assets/eye.png" alt="shopping card" srcset="" />
          <h4>{{ $t("sell.h4_2") }}</h4>
          <p>{{ $t("sell.p2") }}</p>
        </div>
        <div class="col-5 right_two">
          <img src="../assets/sell_now.png" alt="sell now" srcset="" />
        </div>
      </div>
      <div class="row">
        <div class="col-4 left_three">
          <div class="item">
            <span>{{ $t("sell.item_content") }}</span>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="item">
            <span>{{ $t("sell.item_content") }}</span>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="item">
            <span>{{ $t("sell.item_content") }}</span>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="item">
            <span>{{ $t("sell.item_content") }}</span>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="item">
            <span>{{ $t("sell.item_content") }}</span>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="col-8 right_three">
          <img src="../assets/search.png" alt="gear icon" srcset="" />
          <h4>{{ $t("sell.h4_3") }}</h4>
          <p>{{ $t("sell.p3") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-7 left_two">
          <img src="../assets/happy.png" alt="happy" srcset="" />
          <h4>{{ $t("sell.h4_2") }}</h4>
          <p>{{ $t("sell.p2") }}</p>
        </div>
        <div class="col-5 right_two">
          <img src="../assets/services.png" alt="sell now" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sell {
  margin: 50px 0;

  .row {
    margin: 35px 0;
  }
  .left_one,
  .right_two {
    background-color: #1fbaba31;

    img {
      max-width: 100%;
    }
  }
  button {
    background-color: #ff5c72;
    color: #fff;
  }
  .right_one,
  .left_two,
  .right_three {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
    align-content: space-around;
    padding: 0 25px;
    height: 250px;

    > img {
      width: 35px;
    }
  }
  .right_two {
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
  .left_three {
    background-color: #1fbaba31;
    padding: 5px 10px;
  }
  h4 {
    margin-left: 15px;
  }
  .item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    margin: 10px;
  }
}
</style>