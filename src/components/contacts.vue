<template>
  <div class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img
            class="contacts_img"
            src="../assets/contacts.png"
            alt="contacts image"
            srcset=""
          />
        </div>
        <div class="col-6">
          <form action="">
            <input type="text" class="form-control" placeholder="Name" />
            <input type="main" class="form-control" placeholder="Email" />
            <input
              type="text"
              class="form-control"
              placeholder="Your message"
            />
            <div class="form-group">
              <textarea
                placeholder="Your message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <button class="send">{{ $t("contacts.send") }}</button>
          </form>
        </div>
      </div>
      <h4 class="bold">{{ $t("contacts.h4") }}</h4>
      <h4>{{ $t("contacts.h4_2") }}</h4>
      <div class="btns">
        <button class="app_store">
          <i class="fab fa-apple fa-2x"></i>
          <div>
            <span>{{ $t("contacts.span1") }}</span>
            <span>{{ $t("contacts.span2") }}</span>
          </div>
        </button>
        <button class="google_play">
          <i class="fab fa-google-play fa-2x"></i>
          <div>
            <span>{{ $t("contacts.span3") }}</span>
            <span>{{ $t("contacts.span4") }}</span>
          </div>
        </button>
      </div>
      <div class="social">
        <div class="left">
          <img src="../assets/logo.png" alt="" srcset="" />
          <a href="">{{ $t("contacts.about") }}</a>
          <a href="">{{ $t("contacts.faq") }}</a>
          <a href="">{{ $t("contacts.terms") }}</a>
        </div>
        <div class="right">
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-facebook-f fa-2x"></i>
          <i class="fab fa-linkedin-in fa-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  margin: 30px 0;

  .contacts_img {
    max-width: 80%;
  }
  .form-control {
    margin: 10px 0;
  }
  input {
    position: relative;
    height: 45px;

    &::placeholder {
      font-size: 10px;
      position: absolute;
    }
  }
  button {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    background-color: #1dbabf;
    width: 150px;
    transition: 0.2s ease-in-out;
    float: right;

    &:hover {
      box-shadow: 3px 3px 3px 1px #d0d0d0;
    }
  }
  textarea {
    resize: none;
  }
  .bold {
    font-weight: bold;
    margin: 20px 0;
  }
  .btns {
    display: flex;
    justify-content: center;
    .app_store,
    .google_play {
      margin: 10px;
      outline: none;
      border: navajowhite;
      border-radius: 5px;
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      height: 60px;
      text-align: left;
      color: #fff;
      width: 220px;
      line-height: 1;

      > div {
        margin: 0 10px;
      }
      span:nth-child(2) {
        display: block;
        font-size: 22px;
        font-weight: bold;
      }
    }
    .app_store {
      background-color: #1dbabf;
    }
    .google_play {
      background-color: #234c87;
    }
    i {
      margin: 10px;
      color: #fff;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    img {
      width: 100px;
    }
    a {
      text-decoration: none;
      color: #ccc;
      margin: 0 10px;
    }
  }
  .right {
    i {
      color: #eee;
      margin: 0 10px;
      padding: 5px;
      border-radius: 50%;
      width: 45px;
      text-align: center;
      line-height: 100%;
    }
  }
}
</style>