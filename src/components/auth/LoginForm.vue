<template>
  <q-form
    class="q-gutter-md"
    @submit.prevent="save"
    ref="form"
    v-model="valid"
    :loading="isLoading"
    greedy
    style="width: 300px"
    @reset="reset"
  >
    <q-input
      ref="id"
      dense
      rounded
      outlined
      label="아이디"
      lazy-rules
      counter
      v-model.trim="form.mb_id"
      :rules="[
        (val) => !!val || '필수입력입니다',
        (val) => val.length >= 3 || '3자 이상 적으세요',
        (val) =>
          !!val
            ? /^[a-zA-Z0-9_]{1,105}$/.test(val) ||
              `영어와 숫자만 입력하세요, 10자 이내`
            : true,
      ]"
      debounce
      maxlength="10"
    >
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input>

    <InputPassword
      dense
      label="비밀번호"
      v-model.trim="form.mb_password"
      :rules="[
        (val) => !!val || '필수입력입니다',
        (val) =>
          !!val
            ? /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(
                val
              ) || `특수문자 / 문자 / 숫자 포함 형태의 8~15자리로 넣어주세요`
            : true,
      ]"
      rounded
      outlined
      hint="특수문자/문자/숫자포함 형태의 8~15자리로 넣어주세요"
      autocomplete="on"
      lazy-rules
      debounce
      maxlength="15"
    ></InputPassword>

    <div class="q-pt-md">
      <q-btn unelevated label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";
import InputPassword from "../inputForms/InputPassword.vue";
export default defineComponent({
  name: "LoginForm",
  title: "",
  components: { InputPassword },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["onSave"],
  data() {
    return {
      valid: true,
      form: {
        mb_id: "",
        mb_password: "",
      },
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    async save() {
      this.$refs.form.validate(); // 기본제공
      await this.$nextTick(); // nextTick은 이거처리하고 다음것 내려가라
      this.$emit("onSave", this.form);
    },
    init() {
      const form = {
        mb_id: "",
        mb_password: "",
      };
      this.form = form;
    },
    reset() {
      this.init();
    },
  },
});
</script>

<style scoped lang="scss"></style>
