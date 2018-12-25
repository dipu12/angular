
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})



export class AlertComponent implements OnInit, OnDestroy {
    private subscription:Subscription;
    ngOnInit() {
        // this.subscription = this.alertService.getMessage().subscribe(message => { 
        //     this.message = message; 
        // });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}