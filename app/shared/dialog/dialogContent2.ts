import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Plant } from '../record';
import { TextField } from "ui/text-field";
import { RowHolder } from '../services';
import { find as Find } from 'lodash';

@Component({
    selector: "modal-content2",
    template: `
    <StackLayout margin="24" >
        <StackLayout marginTop="12">
        <Button text="ok" (tap)="close('OK')"></Button>
        <Button text="cancel" (tap)="close('Cancel')"></Button>
        </StackLayout>
    </StackLayout>
  `
})
export class DialogContent2 implements OnInit {
    public plant: Plant;
    public firstTx: string = "";
    constructor(
        private params: ModalDialogParams,
        private rowHolder: RowHolder
    ) {

    }

    ngOnInit() {
        //this.plant.getAttribute('5807af9231f55d0010aaffe5').value = 99;
    }

    public close(result: string) {
        this.params.closeCallback(this.plant);
    }

    public onTextChange(args) {
        let textField = <TextField>args.object;
        this.plant.getAttribute('5807af9231f55d0010aaffe5').value = textField.text
        this.firstTx = textField.text;
    }

    public onReturn(args) {
        let textField = <TextField>args.object;

        console.log("onReturn");
        this.firstTx = textField.text;
    }
}