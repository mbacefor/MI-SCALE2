<template>
  <h3>Target: {{ targetKG }} KG</h3>
  <span
    class="indicate"
    id="indicate"
    :style="{ background: indicateBackgroundColor }"
  ></span>
  <div id="myProgress">
    <div
      id="myBar"
      :style="{ width: progressBarWidth, background: indicateBackgroundColor }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgessBar",
  props: {
    output: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      targetKG: 62.5,
      tolerance: 1.5,
    };
  },
  computed: {
    percentage() {
      if (this.output < 0) {
        this.output = 0;
      }
      return Math.round((this.output / this.targetKG) * 100);
    },
    progressBarWidth() {
      if (this.percentage < 100) {
        return this.percentage + "%";
      } else {
        return "100%";
      }
    },
    indicateBackgroundColor() {
      if (this.output < this.targetKG) {
        return "rgb(43, 138, 255)";
      } else if (
        this.isWithinTolerance(this.targetKG, this.output, this.tolerance)
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  },
  methods: {
    isWithinTolerance(target, output, tolerance) {
      const difference = Math.abs(output - target);
      return difference <= tolerance;
    },
  },
};
</script>

<style scoped>
#myProgress {
  width: 100%;
  background-color: #ddd;
  border: 1px solid #e74c3c;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: rgb(43, 138, 255);
}
.indicate {
  display: block;
  width: 50px;
  height: 50px;
  margin: auto auto;
  margin-bottom: 10px;
  background-color: rgb(43, 138, 255);
  border-radius: 5px;
}
</style>
