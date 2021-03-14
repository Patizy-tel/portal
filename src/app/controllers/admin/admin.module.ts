import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {AdminModule} from '../../views/admin-ui/admin.module'

import {AdminRoute} from './admin-route.routing'
import {DashboardComponent} from './dashboard/dashboard.component'

@NgModule({
    imports: [
        CommonModule, AdminModule, ClarityModule, AdminRoute
    ],
    declarations: [
        DashboardComponent,
      
    ]
})

export class AdminDashboardModule {}