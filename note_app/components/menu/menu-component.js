import menuListComponent from "./menu-list-component.js";

const name = "menu-box";
const MenuComponent = {
    props: {
        label: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
        currentScope: {
            type: String,
            required: true,
        },
        scope: {
            type: String,
            required: true,
        },
        modelValue: {}
    },
    methods: {
        onChanged(index) {
            this.selectedIndex = index;
            this.$emit("scopeChanged", {
                scope: this.scope,
            });
        }
    },
    emits: ['scopeChanged', 'update:modelValue'],
    components: [menuListComponent.name],
    computed: {
        selectedIndex: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            }
        },
        currentSelectedIndex() {
            if (!this.inScope) return -1;
            return this.selectedIndex;
        },
        inScope() {
            return this.currentScope === this.scope;
        }
    },
    template: `
        <aside class="menu mr-3">
            <menu-list 
                :label="label" 
                :items="items" 
                :selectedIndex="currentSelectedIndex"
                @onChanged="onChanged($event)"
            ></menu-list> 
        </aside>
    `
}

export default {
    name,
    MenuComponent,
};