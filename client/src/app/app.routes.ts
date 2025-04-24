import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuddyListComponent } from './buddies/buddy-list/buddy-list.component';
import { BuddyDetailComponent } from './buddies/buddy-detail/buddy-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './__guards/auth.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate: [authGuard],
        children: [
            {path:'buddies', component: BuddyListComponent},
            {path:'buddies/:id', component: BuddyDetailComponent},
            {path:'lists', component: ListsComponent},
            {path:'messages', component: MessagesComponent}
        ]
    },

    {path:'**', component: HomeComponent, pathMatch:'full'}
];
