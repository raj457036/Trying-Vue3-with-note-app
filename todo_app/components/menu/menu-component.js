const name = "menu-box";
const MenuComponent = {
    data() {
        return {
            selectedIndex: -1,
        }
    },
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

    },
    methods: {
        onChanged(index) {
            this.selectedIndex = index;
            this.$emit("update:modelValue", index);
            this.$emit("scopeChanged", {
                scope: this.scope,
            });
        }
    },
    emits: ['scopeChanged', 'update:modelValue'],
    computed: {
        modelValue: {
            get() {
                return this.selectedIndex;
            },
            set(value) {
                this.selectedIndex = value;
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