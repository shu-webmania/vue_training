new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  computed: {
    lessThanThree: function () {
      return this.counter > 3 ? "3以上" : "3以下";
    },
  },
  watch: {
    counter: function () {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 3000);
    },
  },
});
