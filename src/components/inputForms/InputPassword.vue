<template>
  <q-input
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="onInput"
    :type="type ? 'password' : 'text'"
  >
    <template #prepend>
      <q-icon name="key" />
    </template>
    <template #append>
      <q-icon
        :name="type ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="type = !type"
      />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "inputPassword",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    modelModifiers: {
      // 수정자 가져옴
      default: () => ({}),
    },
  },
  data() {
    return {
      type: true,
    };
  },
  methods: {
    onInput(val) {
      this.$emit("update:modelValue", val);
    },
  },
});
</script>

<style></style>
