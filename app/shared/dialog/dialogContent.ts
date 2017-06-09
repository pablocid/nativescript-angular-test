import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogParams, ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Plant } from '../record';
import { TextField } from "ui/text-field";
import { RowHolder } from '../services';
import { find as Find } from 'lodash';

@Component({
    selector: "modal-content",
    template: `
    <StackLayout margin="24" >
        <Label [text]="plant.spot"></Label>
        <StackLayout marginTop="12">
        <TextField (textChange)="onTextChange($event)" (returnPress)="onReturn($event)" > </TextField>
        <Button text="ok" (tap)="close('OK')"></Button>
        <Button text="cancel" (tap)="close('Cancel')"></Button>
        </StackLayout>
    </StackLayout>
  `
})
export class DialogContent implements OnInit {
    public plant: Plant;
    public firstTx: string = "";
    public result: string;
    public index: number;
    constructor(
        private params: ModalDialogParams,
        private rowHolder: RowHolder,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        this.index = this.params.context.index;
    }

    ngOnInit() {
        this.rowHolder.row.subscribe(x => {
            this.plant = Find(x, { id: this.params.context.plant })
        });
    }

    public close(result: string) {
        this.params.closeCallback({ index: this.index });
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

    public show(fullscreen: boolean, index: number) {
        let options: ModalDialogOptions = {
            context: { plant: index },
            fullscreen,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService
            .showModal(DialogContent, options)
            .then((dialogResult: string) => this.result = dialogResult)
    }
}
