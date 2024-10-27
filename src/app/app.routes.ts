import { Routes } from '@angular/router';
import { UserPage } from './userpage/userpage.component';
import { TodoComponent } from './todo/todo.component';
import { NgZoneDemo } from './ngZoneDemo/ng-zone-demo.component';
import { AuthGuard } from './auth/auth.guard';
import { Login } from './login/login.component';

export const routes: Routes = [
    {
        path:"user",
        component:UserPage,
        canMatch:[AuthGuard],
    },
    {
        path:'',
        component:TodoComponent
    },
    {
        path:"ngzone",
        component:NgZoneDemo
    },
    {
        path:"login",
        component:Login
    }
];
