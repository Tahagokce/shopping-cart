import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {ItemComponent} from "../../app/modules/item/item.component";
import {ItemModule} from "../../app/modules/item/item.module";


const meta: Meta<ItemComponent> = {
    title: 'Example/Item',
    component: ItemComponent,
    tags: ['autodocs'],
    render: (args) => ({props: args}),
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ItemModule, StoreModule.forRoot({}, {}),],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<ItemComponent>;

export const showItem: Story = {
    args: {
    },
};
