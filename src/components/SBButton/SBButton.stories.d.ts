import type { StoryObj } from "@storybook/vue3";
declare const meta: {
    title: string;
    component: import("vue").DefineComponent<{
        primary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"small" | "large" | "medium">;
            default: undefined;
        };
        label: {
            type: import("vue").PropType<string>;
            required: true;
        };
        backgroundColor: {
            type: import("vue").PropType<string>;
            default: undefined;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (id: number) => void;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        primary: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"small" | "large" | "medium">;
            default: undefined;
        };
        label: {
            type: import("vue").PropType<string>;
            required: true;
        };
        backgroundColor: {
            type: import("vue").PropType<string>;
            default: undefined;
        };
    }>> & {
        onClick?: ((id: number) => any) | undefined;
    }, {
        primary: boolean;
        size: "small" | "large" | "medium";
        backgroundColor: string;
    }, {}>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        backgroundColor: {
            control: string;
        };
    };
    args: {
        primary: false;
        onClick: import("@storybook/test").Mock<[id: number], any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
