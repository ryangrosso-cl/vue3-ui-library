import { computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: "SBButton",
    inheritAttrs: false,
});
const props = withDefaults(defineProps(), { primary: false, size: undefined, backgroundColor: undefined });
const emit = defineEmits();
const classes = computed(() => ({
    "storybook-button": true,
    "storybook-button--primary": props.primary,
    "storybook-button--secondary": !props.primary,
    [`storybook-button--${props.size || "medium"}`]: true,
}));
const style = computed(() => ({
    backgroundColor: props.backgroundColor,
}));
const onClick = () => {
    emit("click", 1);
};
const __VLS_withDefaultsArg = (function (t) { return t; })({ primary: false, size: undefined, backgroundColor: undefined });
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
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    {
        const __VLS_0 = __VLS_intrinsicElements["button"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, type: ("button"), class: ((__VLS_ctx.classes)), style: ((__VLS_ctx.style)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {}, }, type: ("button"), class: ((__VLS_ctx.classes)), style: ((__VLS_ctx.style)), }));
        __VLS_styleScopedClasses = (classes);
        let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], {}.onClick) };
        __VLS_5 = { click: (__VLS_ctx.onClick) };
        (__VLS_ctx.label);
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [classes, style, onClick, label,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            classes: classes,
            style: style,
            onClick: onClick,
        };
    },
    props: {},
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
