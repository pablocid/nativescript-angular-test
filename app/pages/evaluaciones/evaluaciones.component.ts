import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'ui/page';
import { RowHolder } from '../../shared/services';

@Component({
    selector: "evaluaciones-comp",
    templateUrl: "pages/evaluaciones/evaluaciones.html",
    //styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class EvaluacionesComponent implements OnInit {
    private index: number;
    constructor(
        private router: Router,
        private aRoute: ActivatedRoute,
        private rowHolder: RowHolder,
        private page: Page
    ) { }

    ngOnInit() {
        this.aRoute.params.subscribe(x => {
            //console.log(JSON.stringify(x))
            this.index = parseInt(x.index);
        })
    }
    goBack() {
        //alert('Go Back')
        this.rowHolder.tabIndex.next(0)
        this.router.navigate(["/plantList", { index: this.index }]);
    }

}