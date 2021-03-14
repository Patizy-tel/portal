import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {HelperModule} from '../../helper/helper.module';
import {LayoutComponent} from './layout/layout.component';

import {BlacklistFormComponent} from  './main-page/blacklist-form/blacklist-form.component';
import {EditBlacklistComponent} from './main-page/edit-blacklist/edit-blacklist.component'

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
        MainPageComponent, LayoutComponent ,BlacklistFormComponent ,EditBlacklistComponent
    ],
    exports: [MainPageComponent, LayoutComponent ,BlacklistFormComponent ,EditBlacklistComponent]
})


export class AdminModule {}