import type { StoryObj } from "@storybook/vue3";
declare const meta: {
    title: string;
    component: import("vue").DefineComponent<{
        primary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        secondary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        tertiary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"x-small" | "small" | "large" | "x-large">;
            default: undefined;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        primary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        secondary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        tertiary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"x-small" | "small" | "large" | "x-large">;
            default: undefined;
        };
    }>>, {
        primary: boolean;
        secondary: boolean;
        tertiary: boolean;
        size: "x-small" | "small" | "large" | "x-large";
    }, {}>;
    argTypes: {
        size: {
            control: string;
            options: (string | undefined)[];
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
