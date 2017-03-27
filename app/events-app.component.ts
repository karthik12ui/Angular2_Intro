import {Component} from '@angular/core'  //Component from Angular Code Modules

@Component(   // Decorating Component to Main EventAppClass
    {
        selector :'events-app',
        template : `<nav-bar></nav-bar>
       <router-outlet></router-outlet>
        `
    }
)   
export class EventsAppComponent{

}