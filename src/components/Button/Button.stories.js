import Button from "./Button.vue";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: "Example/Button",
    component: Button,
    argTypes: {
        size: { control: "select", options: [undefined, "x-small", "small", "large", "x-large"] },
    },
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
    args: {
        primary: true,
    },
};
export const Secondary = {
    args: {
        secondary: true,
    },
};
export const Tertiary = {
    args: {
        tertiary: true,
    },
};
