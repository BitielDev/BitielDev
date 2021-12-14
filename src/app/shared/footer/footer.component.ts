import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(private router: Router, private analytics: AngularFireAnalytics ) {}

    ngOnInit() {

    }
    logPrivacyPolicy(privacyPlacement: string){
      this.analytics.logEvent('privacy_click', { 'privacy_placement': privacyPlacement});
  }
    getPath(){
      return this.router.url;
    }
    handleContactUs(){
      this.analytics.logEvent('contact_us_click', {});
    }
}
