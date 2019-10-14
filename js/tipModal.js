Vue.component('tip-modal', {
  data: () => {
    return {
      
    }
  },
  template: `
    <div class="myModal" v-if="show">
      <div class="modalContainer tipModal">
        <div class="modalHeader">
          提示
        </div>
        <div class="modalBody">
          {{msg}}
        </div>
        <div class="modalFooter row spe">
          <div class="btn confBtn" @click="$emit('confirm')">确定</div>
        </div>
      </div>
    </div>
  `,
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: ''
    }
  }
})