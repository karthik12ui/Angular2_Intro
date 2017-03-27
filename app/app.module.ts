import {NgModule} from '@angular/core'
import{BrowserModule,} from '@angular/platform-browser'
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import{RouterModule} from '@angular/router'

import {
EventsListComponent,
EventThumbnailComponent,
EventDetailComponent,
CreateEventComponent,
EventService,
EventRouteActivator,
EventListResolver,
CreateSessionComponent,
SessionListComponent,
DurationPipe,
UpvoteComponent,
VoterService
} from './events/index'
import {
CollapsabaleWellComponent,
TOASTR_TOKEN,
Toastr,
JQ_TOKEN,
SimpleModalComponent,
ModalTriggerDirective
} from './common/index'

import {EventsAppComponent} from './events-app.component'

import {NavBarComponent} from './navbar/nav-bar.component'


import{Error404Component} from './errors/404.component'
import{AuthService} from'./User/auth.service' //Importing the Auth Servive to share accorss app

import {appRoutes} from './routes'

declare let toastr : Toastr
declare let jQuery : Object

@NgModule({
    imports:[BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsabaleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe,
        UpvoteComponent
    ],
    providers:[EventService,
               {
                   provide:TOASTR_TOKEN,  // This is an Object syntax
                   useValue:toastr
               },
                 {
                   provide:JQ_TOKEN,  // This is an Object syntax
                   useValue:jQuery
               },
               EventRouteActivator,  // This is Class 
               EventListResolver,
               AuthService,
               {
                   provide:'canDeactivateCreateEvent', // This is Class 
                   useValue:checkDirtyState
               },
               VoterService
                
               ],
    bootstrap:[EventsAppComponent]
})

export class AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You havent saved this event. Do you want to Continue without Saving')
        return true
}