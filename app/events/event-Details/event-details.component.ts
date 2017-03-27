import {Component} from '@angular/core'
import{ActivatedRoute,Params} from '@angular/router'

import{EventService} from '../shared/event.service'

import { AuthService } from '../../User/auth.service'

import{IEvent} from '../shared/event.model'

import{ISession} from '../shared/event.model'

@Component({
    templateUrl:'/app/events/event-Details/event-details.component.html',
    styles:[` .event-image:{height:100px;}
                a{cursor:pointer}`]
})

export class EventDetailComponent{
    event :IEvent
    addSessionMode:boolean
    filterBy:string ='all'
    sortBy:string ='votes'
constructor(private eventService:EventService, 
            private route:ActivatedRoute){

}
ngOnInit(){
   this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']); // Re seting Event prop so it can navigate from child Componnet
          this.addSessionMode = false
})
}

addSession(){
    this.addSessionMode = true
}

saveNewSession(session:ISession){
const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
session.id = nextId+1
this.event.sessions.push(session)
this.eventService.updateEvent(this.event)
this.addSessionMode=false
}
cancelNewSession(){
       this.addSessionMode = false
}
}