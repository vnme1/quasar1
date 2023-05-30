<template>
  <div>
      현재 시간 : {{today}}
  </div>
</template>
<script>
  import dayjs from 'dayjs'
  export default {
      component: {
          dayjs
      },
      data() {
          return {
              today: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          }
      },
  }
</script>
