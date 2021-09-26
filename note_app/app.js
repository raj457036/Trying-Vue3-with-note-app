import components from "./components/index.js";
import {
    Note
} from "./models/note.js";

const AppComponent = {
    data() {
        return {
            items: [
                new Note(1, "Sample Title", "Sample content"),
            ],
            editOptions: [
                "+ New Note",
                // "Tags",
            ],
            editScope: "edit",
            noteScope: "notes",
            currentScope: "edit",
            currentIndex: -1,
        }
    },
    methods: {
        getIndexOfNote(noteId) {
            const index = this.items.findIndex((value) => value.id === noteId);
            return index;
        },
        onScopeChanged(newScope) {
            this.currentScope = newScope.scope;
        },
        onDataSubmit(noteData) {
            const index = this.getIndexOfNote(noteData.id);

            if (index === -1) {
                this.items.push(noteData);
            } else {
                this.items[index] = noteData;
            }
        },
        onDataDelete(noteId) {
            const index = this.getIndexOfNote(noteId);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        }
    },
    computed: {
        selectedNote() {
            return this.items[this.currentIndex];
        },
        noteTitles() {
            return this.items.map((item) => item.title);
        },
        isEditScope() {
            return this.currentScope === this.editScope;
        },
        isNoteScope() {
            return this.currentScope === this.noteScope;
        }
    }
}

let app = Vue.createApp(AppComponent);

components.forEach((component) => app.component(component.name, component.component));

app.mount("#app");