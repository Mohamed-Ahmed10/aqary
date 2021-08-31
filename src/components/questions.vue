<template>
  <div class="questions">
    <div class="container">
      <h2>{{ $t("questions.h2") }}</h2>
      <div v-for="(faq, i) in faqs" :key="i">
        <h2>{{ faq["title_" + $i18n.locale] }}</h2>
        <div class="row">
          <div class="col-6" v-for="(item, m) in faq.questions" :key="m">
            <h3>{{ item["question_" + $i18n.locale] }}</h3>
            <p>
              {{ item["answer_" + $i18n.locale] }}
            </p>
          </div>
        </div>
      </div>
      <button>{{ $t("questions.btn") }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin: 40px 0;
}
.col-6 {
  padding: 20px;
  text-align-last: left;
}
button {
  padding: 10px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 5px;
  color: #9e9e9e;
  background-color: transparent;
  width: 150px;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 3px 1px #d0d0d0;
  }
}
</style>

<script>
export default {
  name: "questions",
  data() {
    return {
      faqs: [],
    };
  },
  created() {
    this.getFaqs();
  },
  methods: {
    getFaqs() {
      console.log("Test");
      this.axios
        .get("https://apis.handesmade.com/api/help")
        .then((response) => {
          let res = response.data;
          this.faqs = res.result.help;
        });
    },
  },
};
</script>
