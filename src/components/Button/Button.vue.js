import { computed } from "vue";
import { VBtn } from "vuetify/components";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// type VBtnProps = InstanceType<typeof VBtn>["$props"];
defineOptions({
    name: "CLButton",
    inheritAttrs: false,
});
const props = withDefaults(defineProps(), {
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
const __VLS_withDefaultsArg = (function (t) { return t; })({
    primary: false,
    secondary: false,
    tertiary: false,
    size: undefined,
});
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_components.VBtn;
    __VLS_components.VBtn;
    __VLS_components.VBtn;
    __VLS_components.VBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    {
        const __VLS_0 = {}.VBtn;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, color: ((__VLS_ctx.buttonType)), ...(__VLS_ctx.btnProps), }));
        ({}.VBtn);
        ({}.VBtn);
        const __VLS_2 = __VLS_1({ ...{}, color: ((__VLS_ctx.buttonType)), ...(__VLS_ctx.btnProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, color: ((__VLS_ctx.buttonType)), ...(__VLS_ctx.btnProps), }));
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [buttonType, btnProps,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            VBtn: VBtn,
            btnProps: btnProps,
            buttonType: buttonType,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
