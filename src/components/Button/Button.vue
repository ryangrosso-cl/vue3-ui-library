<template>
  <VBtn :color="buttonType" v-bind="btnProps">
    Button
  </VBtn>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { VBtn } from "vuetify/components";

// type VBtnProps = InstanceType<typeof VBtn>["$props"];

defineOptions({
  name: "CLButton",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  size?:  "x-small" | "small" | "large" | "x-large",
  // flat: VBtnProps["flat"],
  // disabled: VBtnProps["disabled"],
  // ripple: VBtnProps["ripple"],
  // text: VBtnProps["text"],
  // icon: VBtnProps["icon"],
  // prependIcon: VBtnProps["prependIcon"],
  // appendIcon: VBtnProps["appendIcon"],
  // href: VBtnProps["href"],
  // elevation: VBtnProps["elevation"],
}>(), {
  primary: false,
  secondary: false,
  tertiary: false,
  size: undefined,
});

const btnProps = computed(() => ({
  size: props.size,
  // flat: props.flat,
  // disabled: props.disabled,
  // ripple: props.ripple,
  // text: props.text,
  // icon: props.icon,
  // prependIcon: props.prependIcon,
  // appendIcon: props.appendIcon,
  // href: props.href,
  // elevation: props.elevation,
}));

const buttonType = computed(() => {
  switch (true) {
    case props.primary:
      return "primary";

    case props.secondary:
      return "secondary";

    case props.tertiary:
      return "tertiary";

    default:
      return "primary";
  }
});
</script>
