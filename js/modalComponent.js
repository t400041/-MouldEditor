Vue.component('my-model', {
  data: () => {
    return {
      
    }
  },
  template: `<div class="myModal" v-if="show">
              <div class="modalContainer">
                <div class="modalHeader" v-if="type === 'img'">
                  配置图片信息
                </div>
                <div class="modalHeader" v-else>
                  配置轮播图
                </div>
                
                <div class="modalBody">
                  <div class="uploadBox" v-if="type === 'img'">
                    <div class="uploadItem" :style="{width: (item.col / 0.6) + '%',height: (item.height) + 'px',margin: 2.5 + 'px'}">
                      <img id="viewImg" :src="imgurl" v-if="imgurl">
                    </div>
                    <input class="imgInput" type="file" accept="image/*" @change="up($event, 'img')">

                  </div>
                  <div class="uploadBox" v-if="type === 'slider'">
                    
                      <div class="uploadItem uploadSlider" v-for="(item2, index) in sliderlist">
                        <img class="viewSlider" :src="item2.img" v-if="item2.img">
                      </div>
                    
                    <input class="imgInput" type="file" accept="image/*" @change="up($event, 'slider')">
                  </div>
                </div>
                <div class="modalFooter row spe">
                  <div class="btn cansBtn" @click="$emit('cancel')">取消</div>
                  <div class="btn confBtn" @click="confirm(item)">确定</div>
                </div>
              </div>
            </div>`,
  props: {
    item: Object,
    show: {
      type: Boolean,
      default: false,
    },
    imgurl: String,
    type: {
      type: String,
    },
    sliderlist: {
      type: Array
    }
  },
  // props: ['item', 'show', 'imgurl', 'type', 'sliderlist'],
  methods: {
    up(e, type) {
      // console.log(e)
      this.$emit('upload', e, type)
    },
    confirm(item) {
      this.$emit('confirm', item)
    }
  },
})