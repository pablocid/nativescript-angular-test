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
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
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
    public tabIndex: number;
    public tab: TabView;

    @ViewChild('rdid') listViewComponent: RadListViewComponent;
    @ViewChild('tabEvaluation') tabHash: TabView;

    constructor(
        private router: Router,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private rowHolder: RowHolder,
        private page: Page,
        private aRoute: ActivatedRoute
    ) {
    }


    public onPTap(i: number) {
        console.log('onPTap', i)
        if (!i) return;
        this.listViewComponent.listView.scrollToIndex(i);
    }

    // public onIndexChanged(args) {
    //     let tabView = <TabView>args.object;
    //     console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    // }

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
        console.log('NG ON INIT')
        //this.tab = <TabView>this.page.getViewById('tabEvaluation');
        // this.controller = new RecordController();

        // console.log('isEmpty', this.rowHolder.row.)
        // this.rowHolder.row.subscribe(s => {
        //     console.log('rowHolderSubscribe')
        //     if (s.length === 0) {
        //         this.controller.getRow(5, 10)
        //             .then(x => x.sort((a, b) => { return a.position - b.position }))
        //             .then(p => this.rowHolder.row.next(p))
        //     }
        // });

        this.rowHolder.tabIndex.subscribe(z => {
            console.log('tabIndex', z)
        })

        // this.aRoute.paramMap.subscribe(x => {
        //     console.log('paramMap');
        //     console.log(x.get('index'))
        //     console.log('close paramMap');
        // })

        // this.aRoute.params.subscribe(x => {
        //     console.log(' this.aRoute.params.subscribe')
        //     this.tab.selectedIndex = 0;
        //     try {

        //     } catch (e) {
        //         console.log('no se pudo parsear el index')
        //     }

        // })

        // this.rowHolder.tabIndex.subscribe(z =>{
        //     this.tab.selectedIndex = z;
        // })


        this.page.on('loaded', () => {
            console.log('onPageLoad')
        })

    }

    onItemTap($event) {
        console.log($event.index);
        //this.show(true, id);
    }
    onTap(id, index) {
        console.log(index);
        this.rowHolder.tabIndex.next(3)
        this.router.navigate(['/plantList/evaluaciones', { index }]);
    }

    gotTo(value: string, index: number) {
        this.router.navigate([value, { index }]);
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
            .showModal(DialogContent, options);
    }

}