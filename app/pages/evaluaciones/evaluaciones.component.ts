import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'ui/page';
@Component({
    selector: "evaluaciones",
    templateUrl: "pages/evaluaciones/evaluaciones.html",
    //styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class EvaluacionesComponent implements OnInit {
    private index: number;
    constructor(private router: Router, private aRoute: ActivatedRoute, private page: Page) { }

    ngOnInit() {
        this.aRoute.params.subscribe(x => {
            //console.log(JSON.stringify(x))
            this.index = parseInt(x.index);
        })
    }
    goBack() {
        //alert('Go Back')
        this.router.navigate(["/plantList", { index: this.index }]);
    }

}