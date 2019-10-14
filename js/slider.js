Vue.component('slider',{
  data: () => {
    return {
      sliderIndex: 0
    }
  },
  template: `
    <div
      class="toolType toolSlider"
    >
      <div v-if="list.items.length > 1">
        <div
          class="sliderItem"
          :class="{show: index3 === sliderIndex}"
          v-for="(item3, index3) in list.items"
          :key="'slider' + index3"
        >
          <img :src="item3.img" alt="" />
        </div>
      </div>
      <p style="margin: 0" v-else>轮播图</p>
    </div>
  `,
  props: {
    list: Object
  },
  mounted() {
    this.sliderShow()
  },
  methods: {
    sliderShow() {
      setInterval(() => {
        if (this.sliderIndex < this.list.items.length - 1) {
          this.sliderIndex ++
        } else {
          this.sliderIndex = 0
        }
      }, 2000);
    }
  },
})