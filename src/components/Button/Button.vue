<template>
  <VBtn :color="buttonType" v-bind="btnProps">
    Button
  </VBtn>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { VBtn } from "vuetify/components";

type VBtnProps = Partial<InstanceType<typeof VBtn>["$props"]>;
type Text = Partial<InstanceType<typeof VBtn>["$props"]>["text"];

defineOptions({
  name: "CLButton",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  size?:  "x-small" | "small" | "large" | "x-large",
  disabled?: boolean,
  ripple?: VBtnProps["ripple"],
  flat?: VBtnProps["flat"],
  text?: Text,
  icon?: VBtnProps["icon"],
  prependIcon?: VBtnProps["prependIcon"],
  appendIcon?: VBtnProps["appendIcon"],
  href?: VBtnProps["href"],
  elevation?: VBtnProps["elevation"],
}>(), {
  primary: false,
  secondary: false,
  tertiary: false,
  size: undefined,
  boolean: false,
  ripple: true,
});
defineEmits(["click"]);


const btnProps = computed(() => ({
  size: props.size,
  disabled: props.disabled,
  ripple: props.ripple,
  // flat: props.flat,
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
