import { Component, ViewContainerRef, AfterViewInit } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DialogContent } from './dialogContent';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'ui/page';

@Component({
    template: `
        <StackLayout>
            <Button text="show" (tap)="show()"></Button>
            <Label [text]="'RESULT: ' + result"></Label>
            <Button text="Go to Plant list" (tap)="pList()"></Button>
        </StackLayout>
    `
})
export class CustomDialogTest implements AfterViewInit {
    public result: string;

    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private route: Router,
        private page:Page
    ) { 
        console.log('custom')
        this.page.on('loaded', () => {
            console.log('onPageLoad')
        })
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