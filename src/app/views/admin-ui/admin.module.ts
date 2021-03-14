import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {HelperModule} from '../../helper/helper.module';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
    imports: [

        CommonModule,
        HelperModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        RouterModule

    ],

    declarations: [
        MainPageComponent, LayoutComponent
    ],
    exports: [MainPageComponent, LayoutComponent]
})


export class AdminModule {}