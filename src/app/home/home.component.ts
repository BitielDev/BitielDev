import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private analytics: AngularFireAnalytics) { }

    ngOnInit() {}
    handleClick(){
        console.log('****hello click here');
        this.analytics.logEvent('custom_event_here', { });
    }
}
