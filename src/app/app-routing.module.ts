import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //all contacts : path: http://localhost:4200/
  {
    path: '', component: AllContactComponent
  },
  //add-contact : path: http://localhost:4200/add-contact
  {
    path: 'add-contact', component: AddContactComponent
  },
  //view-contact : path: http://localhost:4200/view-contact/id
  {
    path: 'view-contact/:id', component: ViewContactComponent
  },
  //edit-contact : path: http://localhost:4200/edit-contact/id
  {
    path: 'edit-contact/:id', component: EditContactComponent
  },
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
