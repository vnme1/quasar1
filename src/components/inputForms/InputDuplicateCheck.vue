<template>
  <q-input
    ref="field"
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="onInput"
    :error="error"
    :error-message="errMsg"
    :no-error-icon="error"
  >
    <template #prepend>
      <q-icon name="person" />
    </template>

    <template #append>
      <q-btn
        v-if="isCheck"
        :loading="iconLoading"
        icon="check"
        flat
        fab-mini
        class="cursor-pointer"
        @click="dupleCheck"
        color="primary"
      >
        <q-tooltip class="bg-accent">중복체크</q-tooltip>
      </q-btn>
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "InputDuplicateCheck",
  components: {},
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
    cbCheck: {
      type: Function,
      default: null,
    },
    origin: String,
  },
  emits: ["update:modelValue"],
  mounted() {},
  created() {
    // console.log(this.modelModifiers) // {trim: true}
  },
  data() {
    return {
      errMsg: "",
      error: false,
      iconLoading: false,
      isCheck: false,
    };
  },
  mounted() {},
  watch: {
    origin() {
      this.isCheck = this.origin ? true : !this.cbCheck;
      this.error = false;
      this.errMsg = "";
    },
  },
  computed: {},
  methods: {
    onInput(val) {
      this.isCheck = this.origin ? this.origin === val : !this.cbCheck; // 아이콘 보이게
      this.errMsg = "";
      this.$emit("update:modelValue", val);
    },
    async dupleCheck() {
      const valid = this.$refs.field.validate();
      if (!valid) return;
      this.error = true;
      this.iconLoading = true;
      // 데이터 받고 위로 올린다
      const data = await this.cbCheck(this.origin);
      if (data && data.cnt == 0) {
        this.errMsg = `사용가능한 ${this.$attrs.label} 입니다.`;
        this.isCheck = false;
        this.iconLoading = false;
        if (this.$refs.field.errMsg != "") {
          setTimeout(() => {
            this.error = false;
            this.errMsg = "";
          }, 2000);
        }
      } else {
        this.errMsg = `중복된 ${this.$attrs.label} 입니다. `;
        this.isCheck = true;
        this.iconLoading = false;
        return;
      }
    },

    validate() {
      if (this.isCheck) {
        this.error = true;
        this.errMsg = `${this.$attrs.label} 중복검사를 해주세요`;
        this.$refs.field.focus();
      }
      return this.isCheck;
    },
  },
});
</script>

<style></style>
