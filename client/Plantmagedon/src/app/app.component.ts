import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Planta3';
  readonly cancelIcon: string = './assets/cancel-icon.svg';
  readonly calendarIcon: string = './assets/calendar-icon.svg';
  readonly menuIcon: string = './assets/menu-icon.svg';
  readonly acceptIcon: string = './assets/accept-icon.svg';

  constructor(private readonly translate: TranslateService,
              private readonly router: Router,) {
    this.translate.use('pl');
    this.translate.setDefaultLang('pl');
    //  login action //register//dashboard
    if(true){
      this.router.navigate(['/dashboard']);
    }
  }

}

