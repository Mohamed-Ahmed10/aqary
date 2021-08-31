<template>
  <div class="features">
    <h2>{{ $t("features.h2") }}</h2>
    <p>{{ $t("features.p") }}</p>
    <button class="open">{{ $t("features.btn") }}</button>
    <img src="../assets/dashboard.png" alt="" srcset="" />
  </div>
</template>

<style lang="scss" scoped>
.features {
  margin: 50px 0;
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

  &:hover {
    box-shadow: 3px 3px 3px 1px #d0d0d0;
  }
}
p {
  padding: 40px 15%;
}
img {
  max-width: 90%;
  margin: 20px;
}
</style>