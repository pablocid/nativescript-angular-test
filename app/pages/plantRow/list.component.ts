import { Component, Input, ChangeDetectionStrategy, OnInit, ViewContainerRef, ViewChild, AfterContentInit, AfterViewInit, AfterContentChecked } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { RecordController, Plant } from '../../shared/record';
import { Observable as RxObservable } from "rxjs/Observable";
import { alert as Alert } from 'ui/dialogs';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { DialogContent } from '../../shared/dialog';
import { RowHolder } from '../../shared/services';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { RadListView, ListViewEventData } from "nativescript-telerik-ui/listview";
import { RadListViewComponent, ItemEventArgs } from "nativescript-telerik-ui/listview/angular";

import { Page } from "ui/page";

@Component({
    selector: "plant-row",
    templateUrl: "pages/plantRow/list.html",
    //styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class PlantRowComponent implements OnInit {
    public controller: RecordController;
    public myItems: BehaviorSubject<Plant[]>;
    public result: string;
    public index: number;

    constructor(
        private router: Router,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private rowHolder: RowHolder,
        private page: Page,
        private aRoute: ActivatedRoute
    ) {
        this.controller = new RecordController();
        // var listview: RadListView = <RadListView>page.getViewById("rdid");
        // console.log(listview);
        //listview.scrollToIndex(10);
        this.page.on('loaded', () => {
            console.log('onPageLoad')
            this.krap()
        })
    }


    @ViewChild('rdid') listViewComponent: RadListViewComponent;

    public onPTap(i: number) {
        console.log('onPTap', i)
        if (!i) return;
        this.listViewComponent.listView.scrollToIndex(i);
    }

    krap() {
        this.aRoute.params.subscribe(x => {
            console.log(' this.aRoute.params.subscribe')
            try {
                //console.log('trying', x.index)
                
                console.log(typeof x.index)
                this.index = parseInt(x.index);
                console.log(typeof this.index)

                this.onPTap(this.index);
                // const index = parseInt(x.index);
                // console.log(x.index);
                // console.log(JSON.stringify(x))
                // if (index) {
                //     this.onPTap(index);
                // }
            } catch (e) {
                console.log('no se pudo parsear el index')
            }

        })
    }

    onPageLoaded() {
        console.log("onPageLoaded");
    }

    goToIndex() {
        this.onPTap(this.index);
    }
    onItemLoading($event) {
        console.log('loading event', Object.keys($event))
    }

    ngOnInit() {
        this.rowHolder.row.subscribe(s => {
            if (s.length === 0) {
                this.controller.getRow(5, 10)
                    .then(x => x.sort((a, b) => { return a.position - b.position }))
                    .then(p => this.rowHolder.row.next(p))
            }
        })
        this.krap()

    }

    onItemTap($event) {
        console.log($event.index);
        //this.show(true, id);
    }
    onTap(id, index) {
        console.log(index);
        //alert(id)
        //this.gotTo('evaluaciones')
        //this.onPTap();
        //this.show(true, id, index);
        this.gotTo('evaluaciones', index);
    }

    gotTo(value: string, index: number) {
        this.router.navigate(['/' + value, { index }]);
    }

    onItemPress($event) {
        alert($event.index)
    }

    public show(fullscreen: boolean, id: string, index: number) {
        let options: ModalDialogOptions = {
            context: { plant: id, index },
            fullscreen,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService
            .showModal(DialogContent, options)
            .then((dialogResult: any) => {
                //this.onPTap(dialogResult.index);
            })
    }

    // public onPullToRefreshInitiated(args) {
    //     var that = new WeakRef(this);
    //     timerModule.setTimeout(function () {
    //         var initialNumberOfItems = that.get()._numberOfAddedItems;
    //         for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
    //             if (i > posts.names.length - 1) {
    //                 break;
    //             }
    //             var imageUri = Application.android ? posts.images[i].toLowerCase() : posts.images[i];

    //             that.get()._dataItems.splice(0, 0, new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
    //             that.get()._numberOfAddedItems++;
    //         }
    //         var listView = args.object;
    //         listView.notifyPullToRefreshFinished();
    //     }, 1000);
    // }

}