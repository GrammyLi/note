<template>
  <div>
    <div id="container">{{ count }}</div>
    <button @click="updateCount">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  watch: {
    count (newVal, oldVal) {
      // 打印几次，值是多少？
      console.log('watch count', newVal)
    }
  },
  methods: {
    updateCount() {
      for (var i = 1; i <= 3; i++) {
        this.count += 1
      }
      // 值是多少？
      console.log('count', document.querySelector('#container').innerText)
    }
  }
}
</script>