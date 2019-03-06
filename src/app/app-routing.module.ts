import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {ReceipesComponent} from './receipes/receipes.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ReceipeStartComponent } from "./receipes/receipe-start/receipe-start.component";
import { ReceipeDetailComponent } from "./receipes/receipe-detail/receipe-detail.component";
import { ReceipeEditComponent } from "./receipes/receipe-edit/receipe-edit.component";

/*array of js objects where each object represents a route*/
const appRoutes: Routes=[
    {path:'', redirectTo:'/receipes',pathMatch:'full'},/*when we load the app for first time -empty path should match full empty path*/
    {path:'receipes',component:ReceipesComponent,children:[
            {path:'',component:ReceipeStartComponent},
            {path:'new',component:ReceipeEditComponent},
            /*we ordered path new before :id as if we would reverse it , it will give an error as the router will 
            look for an id with id='new' when fetching the route config from the url*/
            {path:':id',component:ReceipeDetailComponent},
            {path:':id/edit',component:ReceipeEditComponent}
        ]
    },
    {path:'shopping-list',component:ShoppingListComponent},
   
];
/*add ngmodule --to transfer from a normal ts class to an angular module*/
@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})

export class AppRoutingModule{

}