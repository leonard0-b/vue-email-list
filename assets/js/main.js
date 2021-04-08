var app = new Vue ({
  el: "#root",
    data: {
      email: []
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
