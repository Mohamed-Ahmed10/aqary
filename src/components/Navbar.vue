<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" srcset="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container custum_container">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a href="">{{$t('navbar.home')}}</a>
            <a href="">{{$t('navbar.contact')}}</a>
            <a href="">{{$t('navbar.how')}}</a>
          </div>
          <div class="btns_container">
            <button class="open">{{$t('navbar.open')}}</button>
            <div class="select-box">
              <div class="select-box__current" tabindex="1">
                <div class="select-box__value">
                  <input
                    class="select-box__input"
                    type="radio"
                    id="0"
                    value="1"
                    name="Ben"
                    checked="checked"
                  />
                  <p class="select-box__input-text">En</p>
                </div>
                <div class="select-box__value">
                  <input
                    class="select-box__input"
                    type="radio"
                    id="1"
                    value="2"
                    name="Ben"
                  />
                  <p class="select-box__input-text">عربى</p>
                </div>
                <img
                  class="select-box__icon"
                  src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                />
              </div>
              <ul class="select-box__list">
                <li>
                  <label
                    class="select-box__option"
                    for="0"
                    aria-hidden="aria-hidden"
                    :class="{'active' : $i18n.locale == 'en'}" @click.prevent="changeLocale('en')"
                    >En</label
                  >
                </li>
                <li>
                  <label
                    class="select-box__option"
                    for="1"
                    aria-hidden="aria-hidden"
                    :class="{'active' : $i18n.locale == 'ar'}" @click.prevent="changeLocale('ar')"
                    >عربى</label
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "App",

  data: function() {
    return {
 
    };
  },
  methods: {
   changeLocale(locale) {
      if (locale == "ar") {
        document.querySelector("body").classList.add("rtl");
        document.dir = "rtl";
        localStorage.setItem("locale", "ar");
        console.log(locale);
      } else {
        document.querySelector("body").classList.remove("rtl");
        document.dir = "ltr";
        localStorage.setItem("locale", "en");
        console.log(locale);
      }
      this.$i18n.locale = locale;
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  background-color: #f3f3f3;
  height: 100px;
  z-index: 2;
  color: #fff;

  a 
  {
    text-decoration: none;
      color: #848484;
      margin: 0 10px;
  }
  .navbar-brand img {
    width: 90px;
  }
  .navbar-nav {
    width: 50%;
    justify-content: center;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .custum_container {
    margin-top: 20px;
  }
  .collapse {
    justify-content: space-between;

    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }
  .open {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    background-color: #fcc825;
    width: 150px;
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 3px 3px 3px 1px #d0d0d0;
    }
  }
  .navbar-toggler {
    outline: none;
  }

  .select-box {
    position: relative;
    display: inline-block;
    width: 75px;
    font-family: "Open Sans", "Helvetica Neue", "Segoe UI", "Calibri", "Arial",
      sans-serif;
    font-size: 18px;
    color: #fff;
    margin: 0 25px;

    &__current {
      position: relative;
      cursor: pointer;
      outline: none;

      &:focus {
        & + .select-box__list {
          opacity: 1;

          // We have to set "animation-name: none;" to make the list visible (read below how it works)

          animation-name: none;

          .select-box__option {
            cursor: pointer;
            color : #000
          }
        }

        .select-box__icon {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &__icon {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 12px;
      opacity: 0.3;
      transition: 0.2s ease;
    }

    &__value {
      display: flex;
    }

    &__input {
      display: none;

      &:checked + .select-box__input-text {
        display: block;
        color : #848484
      }
    }

    &__input-text {
      display: none;
      width: 100%;
      margin: 0;
      text-align: left;
    }

    &__list {
      position: absolute;
      width: 100%;
      padding: 0;
      list-style: none;
      opacity: 0;
      background-color: #d2dae24d;

      // We need to use animation with delay.
      // Otherwise the click event will not have time to run on label, because this element disapears immediately when .select-box__current element loses the focus.
      // This delay will not be noticed because we set "opacity" to "0".
      // We also use "animation-fill-mode: forwards" to make the list stay hidden.

      animation-name: HideList;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: step-start;
    }

    &__option {
      display: block;
      padding: 15px;
      background-color: #fff;
      margin-bottom: 0;

      > li {
        background-color: #d2dae24d;
      }
      &:hover,
      &:focus {
        color: #546c84;
        background-color: #fbfbfb;
      }
    }
  }

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
}
</style>