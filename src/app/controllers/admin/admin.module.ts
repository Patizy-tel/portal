import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {AdminModule} from '../../views/admin-ui/admin.module'

import {AdminRoute} from './admin-route.routing'
import {DashboardComponent} from './dashboard/dashboard.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule, AdminModule, ClarityModule, AdminRoute ,FormsModule ,ReactiveFormsModule ,RouterModule
    ],
    declarations: [
        DashboardComponent,
      
    ]
})

export class AdminDashboardModule {}