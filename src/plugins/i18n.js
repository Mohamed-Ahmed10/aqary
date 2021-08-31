import { createI18n } from "vue-i18n";
const messages = {
en:{
	navbar : {
    home : "Home",
    contact : "Contact us" ,
    how : "How to use",
    open : "Open portal"
  },
  header:{
    h1 : "Great App that makes your life easier",
    p : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem praesentium veniam facere officia. Vero quisquam repellendus voluptate nulla ex deleniti laboriosam eveniet numquam, blanditiis" ,
    open : "Start using for free",
    explore : "Explore features"
  },
  products : {
    h4 : "The only app you'll need to find <br />the property of your dreams",
    product1 : "jewelry",
    product2 : "pride",
    product3 : "drow",
    product4 : "doll",
    product5 : "reel",
    product6 : "sewing",
    product7 : "wicker",
    product8 : "phone",
    product9 : "accessories",
    product10 : "wood",
  },
  how :{
    h2 :"How to use",
      p1 :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni voluptate unde nihil! Laborum quo, unde expedita modi distinctio, eligendi optio possimus velit magnam atque facilis placeat<",
      h3 :"choose the collection",
      p2 :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni voluptate unde nihil! Laborum quo, unde expedita modi distinctio, eligendi optio possimus velit magnam atque facilis placeat",
      product1 :"jewelry",
      product2 :"pride",
      product3 :"drow",
      product4 :"doll",
      product5 :"reel",
      product6 :"sewing",
  },
  sell : {
    h4_1 : "Add your choice to cart",
    p1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur totam quas! Nemo dolore beatae,",
    btn : "Large button",
    h4_2 :"Add your store to start sell youe products",
    p2 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur totam quas! Nemo dolore beatae,",
    item_content :"Dashboard",
    h4_3 :"Manage your store and start sell with us",
    p3 :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur totam quas! Nemo dolore beatae,",
  },
  screens :{
    h2: "App screens",
    p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur totam quas! Nemo dolore beatae,",
    span1 : "download on the" ,
    span2 : "store app",
    span3 : "Got it on",
    span4 : "google play",

  },
  features :{
    h2 : "Multiple features on the board" ,
    p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur totam quas! Nemo dolore beatae,",
    btn :"Open portal",
  },
  questions :{ 
    h2 :"Have any questions",
    btn : "Read more"
  },
  contacts :{
    name : "Name",
    email :"Email",
    title : "your message title",
    message : "Your message" ,
    send : "Send",
    h4 : "download aqary today",
    h4_2 : "and get started with a free trial for your business",
    span1 : "download on the" ,
    span2 : "store app",
    span3 : "Got it on",
    span4 : "google play",
    about : "about",
    faq : "faq",
    terms :"terms and conditions"
  },
  footer :{
    rights : "All rights reserved to handsome"
  }
},
ar : {
    navbar : {
      home : "الرئيسية ",
      contact : "تواصل معنا" ,
      how : "كيفية الاستخدام",
      open :"بوابات مفتوحة"
    },
    header:{
      h1 : "منصة عقارى ( أيادي تصنع بحب )",
      p : "منصة تجمع الحرفيين بمختلف مجالاتهم الحرفية المتنوعة , لخلق بيئة تجارية لتطوير سوق الحرفيين و إيصالهم إلى شريحة واسعة من العملاء . " ,
      open : "شارك بحرفتك الآن",
      explore : "اكتشف التطبيق "
    },
    products : {
      h4 : " أفضل منصة تجمع لك الحرف اليدوية المميزة و تسهل لك اقتنائها .",
      product1 : "عطور",
      product2 : "فخار",
      product3 : "رسم",
      product4 : "",
      product5 : "خياطة",
      product6 : "",
      product7 : "خوص",
      product8 : "عطور",
      product9 : "كروشيه",
      product10 : "",
    },
    how :{
    h2 :"شاهد وتعرف أكثر على منصة عقارى",
    p1 :"حمل التطبيق وأبدأ متجرك بكل سهولة ",
    h3 :"كيفية الإستخدام",
    p2 :"حمل التطبيق وأبدأ متجرك بكل سهولة ",
    product1 :"مجوهرات",
    product2 :"فخار",
    product3 :"رسم",
    product4 :"العاب",
    product5 :"كروشيه",
    product6 :"خياطه",
    },
    sell : {
      h4_1 : " تسوق حسب المتجر",
      p1 : "مجموعة من المتاجر المنوعة من الحرف اليدوية صنعت بحب ",
      btn : "انضم الآن",
      h4_2 :"انضم إلينا الآن وزد مبيعاتك",
      p2 :"استثمر في مهاراتك اليدوية وسجل متجرك معنا الآن بكل يسر وسهولة بيئة تجارية بحلول واسعة ميسرة في مجال الحرف اليدوية . ",
      item_content :"محتوى",
      h4_3 :"هيدر",
      p3 :"محتورى باللغة العربية"
    },
  screens :{
    h2: "شاشات التطبيق",
    p : "حمل التطبيق وأبدأ متجرك بكل سهولة ",
    span1 : "حمله الان من على " ,
    span2 : "الايفون",
    span3 : "حمله الان من على",
    span4 : "الاندرويد",
  },
  features :{
    h2 : " تحكم في متجرك بشكل كامل وقم بمتابعة عملياتك وإدارة مبيعاتك " ,
    p : "خيارات متنوعة من  مختلف الحرف في مكان واحد , سهولة التسجيل و إضافة الحرف , تابع عمليات الشراء عبر صفحة متجرك و تعرف على منتجاتك الأكثر مبيعا .",
    btn :" أضف اختيارات من الحرف في السلة",
  },
  questions :{
    h2 :"لديك أسئلة",
    btn : "إقراً المزيد"
  },
  contacts :{
    name : "الإسم",
    email :"الايميل",
    title : "عنوان رسالتك",
    message : "الرسالة" ,
    send : "أرسل",
    h4 : "حمل عقارى اليوم",
    h4_2 : "و أبدا مشروعك مع نسخة مجانية لفترة محدودة",
    span1 : "حمله الان من على " ,
    span2 : "الايفون",
    span3 : "حمله الان من على",
    span4 : "الاندرويد",
    about : "عنا",
    faq : "الاسئلة الشائعة",
    terms :"الشروط والاحكام"
  },
  footer :{
    rights : "جميع الحقوق محفوظة لموقع عقارى"
  }
}

}
const i18n = createI18n({
  locale: "en", 
  messages 
});
export default i18n;
