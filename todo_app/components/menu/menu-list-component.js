import menuItemComponent from "./menu-item-component.js";

const name = 'menu-list'
const MenuListComponent = {
    props: {
        items: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        selectedIndex: {
            type: Number,
            required: true,
        }
    },
    emits: ['onChanged'],
    template: `
        <p class="menu-label">
            {{ label }}
        </p>
        <template v-if="items.length === 0"> 
            <small>No items here</small>
        </template>
        <template v-else>
            <ul class="menu-list">
                <menu-item 
                    v-for="(item, index) in items" 
                    :content="item" 
                    :selected="selectedIndex === index"
                    @onTap="$emit('onChanged', index)"
                ></menu-item>
            </ul>
        </template>
    `,
    components: [menuItemComponent.name]
};

export default {
    name,
    MenuComponent: MenuListComponent
}