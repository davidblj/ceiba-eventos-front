import { FormGroup } from "@angular/forms";
import { FormInput, InputType } from "../../shared/form-input.interface";

export class FormConfig {

    readonly form: FormGroup;
    _user: FormInput;
    _password: FormInput;

    constructor(form: FormGroup) {
        this.form = form;
        this.buildUserInput();
        this.buildPasswordInput();
    }

    buildUserInput() {

        this._user = {
            placeholder: 'Usuario',
            control: this.form.controls['username'],
            icon: 'assets/icons/user.svg',
            type: InputType.text            
        };
    }

    buildPasswordInput() {

        this._password = {
            placeholder: 'Contraseña',
            control: this.form.controls['password'],
            icon: 'assets/icons/lock.svg',
            type: InputType.password            
        };
    }

    get user() {
        return this._user;
    }

    get password() {
        return this._password;
    }
}
