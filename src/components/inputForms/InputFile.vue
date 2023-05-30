<template>
  <q-file
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="onInput"
  >
    <template #prepend>
      <q-icon name="link" />
    </template>

    <template #hint> Field hint </template>
  </q-file>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(val) {
      this.$emit("update:modelValue", val);
    },
  },
});
</script>

<style></style>
