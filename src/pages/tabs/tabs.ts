import { Component } from '@angular/core';
import { ProfessionalPage } from "../professional/professional"
import { RegisterPage } from "../register/register"
import { JobsPage} from '../jobs/jobs';

@Component({
      selector: 'page-tab',
      templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1root: any = ProfessionalPage;
    tab2root: any = JobsPage;

    constructor(){

    }
}