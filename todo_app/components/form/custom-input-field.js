const name = 'custom-input-field';
const CustomInputField = {
    props: {
        label: {
            type: String,
            required: false,
            default: "",

            validator: value => value.length > 0,
        },
        type: {
            type: String,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
        },
        modelValue: {}
    },
    computed: {
        content: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
        id() {
            return this.label.toLowerCase() + '-field';
        }
    },
    emits: ['update:modelValue'],
    template: `
        <div class="field">
            <template v-if="label">
                <label :for="id" class="label">
                    {{ label }} 
                </label>
            </template>
            <div class="control">
                <template v-if="type==='textarea'">
                    <textarea v-model="content" :id="id" cols="30" rows="10" class="textarea"
                    :placeholder="placeholder"></textarea>
                </template>
                <template v-else>
                    <input v-model="content" :id="id" :type="type" class="input" :placeholder="placeholder">
                </template>
            </div>
        </div>
    `,
};

export default {
    name,
    CustomInputField,
};