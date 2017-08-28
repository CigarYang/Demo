
/*
 * @Author: Chao Yang
 * @Date: 2017-08-28 07:55:28
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2017-08-28 07:56:31
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';

export const ROUTES: Routes = [
  /*
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }
  */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      ROUTES
    ),
    AccountModule
  ],
  declarations: []
})
export class RoutesModule { }
