<template>
  <q-dialog v-model="dialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">내용 수정</div>
        <div class="text-subtitle2"> {{editTask.id}} </div>
      </q-card-section>
      <q-card-section>
        <q-input
        v-model="editTask.title"
        @keyup.enter="onOKClick"
        ></q-input>
      </q-card-section>


      <!-- <slot /> -->

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn
          color="primary"
          unelevated
          dense
          label="OK"
          @click="onOKClick"
        />
        <q-btn
          unelevated
          dense
          color="primary"
          label="Cancel"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

export default {
  name: "DialogCustom",
  props: ['editTask','origin'],
  emits: ['onInput'],
  data() {
    return {
      dialog: false,
    };
  },
  mounted(){
  },
  watch:{
  },
  methods: { //여기에서 저장한값 다시 데베에 저장하려면 로컬스토리지에 넣어야함
    onOKClick() {
      this.$emit('onInput',this.editTask); //다시 부모에게 값 보내주기
      this.dialog = false;
    },
    onCancelClick() {
      this.editTask.title =this.origin, //취소를 눌럿을때 기존 값으로 돌아오도록 origin 사용
      this.dialog = false;
    },
  },
};
</script>

<style></style>
