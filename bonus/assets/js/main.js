var app = new Vue ({
  el: "#root",
    data: {
      email: [],
      img: [
        "./assets/img/avatar_1.jpg",
        "./assets/img/avatar_2.jpg",
        "./assets/img/avatar_3.jpg",
        "./assets/img/avatar_4.jpg",
        "./assets/img/avatar_5.jpg",
        "./assets/img/avatar_6.jpg",
        "./assets/img/avatar_7.jpg",
        "./assets/img/avatar_8.jpg",
        "./assets/img/avatar_io.jpg",
        "./assets/img/avatar_1.jpg",
        "./assets/img/avatar_2.jpg",
      ]
    },
    mounted: function () {
      for (var i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.email.push(response.data.response)
        })
      }
      this.email = [];
    },
    methods: {
    },
});
