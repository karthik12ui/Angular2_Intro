import {Component ,OnInit} from '@angular/core'
import{ActivatedRoute} from '@angular/router'

import{EventService} from './shared/event.service'

import {IEvent} from './shared/event.model'

@Component({
    template:`
    <div>
    <h1>Upcoming Events</h1>
    <hr/>
   
    <event-thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail> 
    </div>
    `
})

export class EventsListComponent implements OnInit{
    events :IEvent[]
    constructor(private eventService:EventService, 
              
                private route:ActivatedRoute){
    }

    ngOnInit() {
     this.events=this.route.snapshot.data['events'] //events matches the events on routes.ts
    }
}

