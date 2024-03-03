import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {MenuModule} from "../../app/modules/menu/menu.module";
import {MenuComponent} from "../../app/modules/menu/menu.component";


const meta: Meta<MenuComponent> = {
    title: 'Example/Menu',
    component: MenuComponent,
    tags: ['autodocs'],
    render: (args) => ({props: args}),
    decorators: [
        moduleMetadata({
            imports: [CommonModule, MenuModule, StoreModule.forRoot({}, {}),],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const showMenu: Story = {
    args: {
    },
};
