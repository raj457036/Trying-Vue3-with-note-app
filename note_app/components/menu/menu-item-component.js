const name = 'menu-item'
const MenuItemComponent = {
    props: {
        selected: {
            type: Boolean,
            required: false,
        },
        content: {
            type: String,
            required: true,
        }
    },
    emits: ['onTap'],
    template: `
    <li><a :class="{ 'is-active':selected }" @click.prevent="$emit('onTap')">{{ content }}</a></li>
    `
}

export default {
    name,
    MenuItemComponent
}