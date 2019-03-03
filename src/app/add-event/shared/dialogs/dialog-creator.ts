import { FormGroup, FormArray } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../item.interface';

export class DialogCreator {

    dialogService: MatDialog;
    dialogComponent: any;
    formArrayId: string;
    parentForm: FormGroup;

    constructor(dialogService: MatDialog, dialogComponent: any, formArrayId: string, parentForm: FormGroup) {
        this.dialogService = dialogService;
        this.dialogComponent = dialogComponent;
        this.formArrayId = formArrayId;
        this.parentForm = parentForm;
    }

    handleNewInput() {

        const dialog = this.openDialog(null);
        dialog.afterClosed().subscribe(this.onDialogClosed());
    }

    onDialogClosed() {

        return (form: FormGroup) => {

            if (form) {
                this.formArray.push(form);
            }
        };
    }

    handleInputUpdate(index: number) {

        const item = this.formArray.at(index);
        const dialog = this.openDialog({ item });
        dialog.afterClosed().subscribe(this.onEditDialogClosed(index));
    }

    onEditDialogClosed(index: number) {

        return (item: FormGroup) => {

            if (item) {
                this.formArray.setControl(index, item);
            }
        };
    }

    handleInputDelete(index: number) {
        this.formArray.removeAt(index);
    }

    openDialog(data) {

        return this.dialogService.open(this.dialogComponent, {
            width: '80vw',
            panelClass: 'dialog',
            data
        });
    }

    get formArray() {
        return this.parentForm.get(this.formArrayId) as FormArray;
    }
}