import components from "./components/index.js";
import {
    Note
} from "./models/note.js";

const AppComponent = {
    data() {
        return {
            items: [
                new Note(1, "Title 1", "Content 1"),
                new Note(2, "Title 2", "Content 2"),
                new Note(3, "Title 3", "Content 3"),
                new Note(4, "Title 4", "Content 4"),
                new Note(5, "Title 5", "Content 5"),
                new Note(6, "Title 6", "Content 6"),
                new Note(7, "Title 7", "Content 7"),
                new Note(8, "Title 8", "Content 8"),
            ],
            editOptions: [
                "+ New Note",
                "Tags",
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