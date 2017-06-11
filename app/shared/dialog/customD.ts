import { Component, ViewContainerRef, AfterViewInit, OnInit } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DialogContent } from './dialogContent';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'ui/page';
import { RecordController, Plant } from '../../shared/record';
import { RowHolder } from '../../shared/services';

@Component({
    template: `
        <StackLayout>
            <Button text="show" (tap)="show()"></Button>
            <Label [text]="'RESULT: ' + result"></Label>
            <Button text="Go to Plant list" (tap)="pList()"></Button>
        </StackLayout>
    `
})
export class CustomDialogTest implements AfterViewInit, OnInit {
    public result: string;
    public controller: RecordController;

    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private route: Router,
        private rowHolder: RowHolder,
        private page: Page
    ) {
        console.log('custom')
        this.page.on('loaded', () => {
            console.log('onPageLoad')
        })
    }

    ngOnInit() {
        this.controller = new RecordController();
        this.controller.getRow(5, 10)
            .then(x => x.sort((a, b) => { return a.position - b.position }))
            .then(p => this.rowHolder.row.next(p))
    }

    ngAfterViewInit() {

    }
    public show(fullscreen: boolean) {
        let options: ModalDialogOptions = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService
            .showModal(DialogContent, options)
            .then((dialogResult: string) => this.result = dialogResult)
    }

    pList() {
        this.route.navigate(['/plantList'])
    }
}