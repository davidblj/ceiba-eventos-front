import { TextInput } from "../../shared/text-input.interface";
import { FormGroup } from "@angular/forms";

export class FormConfig {

    readonly form: FormGroup;
    _name: TextInput;
    _description: TextInput;

    constructor(form: FormGroup) {
        this.form = form;
        this.buildNameInput();
        this.buildDescriptionInput();
    }

    buildNameInput() {

        this._name = {
            appearence: 'outline',
            control: this.form.controls['name'],
            icon: 'label_outline',
            label: 'Nombre',
            minLength: 3,
            maxLength: 24,
            optional: false
        };
    }

    buildDescriptionInput() {

        this._description = {
            appearence: 'outline',
            control: this.form.controls['description'],
            icon: 'short_text',
            label: 'Descripción',
            minLength: 10,
            maxLength: 150,
            optional: true
        };
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }
}
