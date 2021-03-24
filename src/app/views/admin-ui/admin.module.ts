import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {HelperModule} from '../../helper/helper.module';
import {LayoutComponent} from './layout/layout.component';
import { TodoFormComponent } from './main-page/todo-form/todo-form.component';
import { EditTodoComponent } from './main-page/edit-todo/edit-todo.component';

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
        MainPageComponent, LayoutComponent ,TodoFormComponent ,EditTodoComponent
    ],
    exports: [MainPageComponent, LayoutComponent ,TodoFormComponent ,EditTodoComponent]
})


export class AdminModule {}