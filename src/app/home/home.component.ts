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

    ngOnInit() {
        this.analytics.setCurrentScreen('bitiel_home')
    }
    logDownloadClick(downloadPlacement: string){
        this.analytics.logEvent('download_click', { 'download_placement': downloadPlacement});
    }
}
