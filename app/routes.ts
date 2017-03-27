import {Routes} from '@angular/router'

import {
EventsListComponent,
EventDetailComponent,
CreateEventComponent,
EventListResolver,
EventRouteActivator,
CreateSessionComponent
}from './events/index'

import{Error404Component} from './errors/404.component'
export const appRoutes:Routes = [
    {path: 'events/new', component:CreateEventComponent},
    {path: 'events', component:EventsListComponent,
                     resolve:{events:EventListResolver}}, //service resolver
    {path: 'events/:id', component:EventDetailComponent,
                        canActivate:[EventRouteActivator],
                        canDeactivate:['canDeactivateCreateEvent']}, // function defined in app.module
    {path:'events/session/new', component:CreateSessionComponent},
    {path:'404', component:Error404Component},
    {path: '',redirectTo:'/events',pathMatch:'full'},
     {path: 'user',loadChildren:'app/User/user.module#UserModule'}
]