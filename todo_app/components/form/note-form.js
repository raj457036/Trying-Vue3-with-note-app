import {
    Note
} from "../../models/note.js";

const name = 'note-form';
const NoteForm = {
    data() {
        return {
            id: null,
            title: '',
            content: '',
        }
    },
    mounted() {
        this.prePopulate();
    },
    watch: {
        note() {
            this.prePopulate();
        }
    },
    props: {
        note: {
            type: Note,
            required: false,
        },

    },
    methods: {
        prePopulate() {
            if (this.note) {
                this.id = this.note.id;
                this.title = this.note.title;
                this.content = this.note.content;
            }
        },
        getNewId() {
            const now = Date.now();
            return now;
        },
        assignID() {
            this.id = this.getNewId();
        },
        saveNote() {
            if (!this.id) this.assignID();

            const data = new Note(
                this.id,
                this.title,
                this.content,
            );

            this.$emit('onSubmit', data);
        },
        saveNewNote() {
            this.assignID()
            this.saveNote();
        },
        deleteNote() {
            this.$emit('onDelete', this.id);
        }
    },
    emit: ['onSubmit', 'onDelete'],
    template: `
    <form>
        <div class="field">
            <label for="title-field" class="label">Title</label>
            <div class="control">
                <input v-model="title" id="title-field" type="text" class="input" placeholder="Enter title here">
            </div>
        </div>
        <div class="field">
            <label for="content-field" class="label">Content</label>
            <textarea v-model="content" id="content-field" cols="30" rows="10" class="textarea"
                placeholder="Something amazing..."></textarea>
        </div>
        <div class="buttons">
            <button class="button is-primary" @click.prevent="saveNote()">Save</button>
            
            <template v-if="id">
                <button class="button is-warning" @click.prevent="saveNewNote()">Save as new</button>
                <button class="button is-danger ml-auto" @click.prevent="deleteNote()">Delete</button>
            </template>
        </div>
    </form>
    `
};

export default {
    name,
    NoteForm
};