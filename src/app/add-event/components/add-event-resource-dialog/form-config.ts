import { TextInput } from "../../shared/text-input.interface";
import { NumericInput } from "../../shared/numeric-input.interface";
import { FormGroup } from "@angular/forms";

export class FormConfig {

    readonly form: FormGroup;
    _name: TextInput;
    _description: TextInput;
    _price: NumericInput;

    constructor(form: FormGroup) {

        this.form = form;
        this.buildNameInput();
        this.buildDescriptionInput();
        this.buildPriceInput();
    }

    buildNameInput() {

        this._name = {
            appearence: 'standard',
            control: this.form.controls['name'],
            icon: 'tag_faces',
            label: 'Nombre',
            minLength: 3,
            maxLength: 24            
        }
    }

    buildDescriptionInput() { 

        this._description = {
            appearence: 'standard',
            control: this.form.controls['description'],
            icon: 'short_text',
            label: 'Descripción',
            minLength: 10,
            maxLength: 150
        }
    }

    buildPriceInput() {

        this._price = {
            appearence: 'standard',
            control: this.form.controls['price'],
            icon: 'attach_money',
            label: 'Precio'
        }
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get price() {
        return this._price;
    }
}