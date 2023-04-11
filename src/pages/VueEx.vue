<template class="q-pa-md q-gutter-md">
	<q-card-section>Message: {{ msg }}</q-card-section>
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>

  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>

  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>

  <q-card-section>
    {{ number + 1 }}
</q-card-section>
<q-separator />
<q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
<q-separator />
<q-card-section>
  {{ message.split("").reverse().join("") }}
</q-card-section>
<q-separator />
<q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>

  <q-separator />


</template>
<script>
export default {
  name:'',
  title:"Vue Basic",
  components:{},
  data(){
    return{
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      linkId: "vue",
	      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
        },
      isButtonDisabled: true,
      ok: true,
				number: 1000,
	      message:
	        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	      id: "genie",
    }
  },
  computed:{

  },
  watch:{

  },
  mounted(){

  },
  methods:{

  }

}
</script>

<style>

</style>
