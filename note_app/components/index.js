import menuListComponent from "./menu/menu-list-component.js";
import menuItemComponent from "./menu/menu-item-component.js";
import menuComponent from "./menu/menu-component.js";

import noteForm from "./form/note-form.js";
import customInputField from "./form/custom-input-field.js";

const Components = [{
        name: menuListComponent.name,
        component: menuListComponent.MenuComponent,
    },
    {
        name: menuItemComponent.name,
        component: menuItemComponent.MenuItemComponent,
    },
    {
        name: menuComponent.name,
        component: menuComponent.MenuComponent,
    },
    {
        name: noteForm.name,
        component: noteForm.NoteForm,
    },
    {
        name: customInputField.name,
        component: customInputField.CustomInputField,
    }
];

export default Components;