import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from './shared/index'
@Component({
    selector : 'event-thumbnail',
    template: `
    <div  [routerLink]="['/events',event.id]" class="well thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date : {{event.date | date:'shortDate'}}</div>
    <div>Time : {{event.time}}</div>
    <div>Price :{{event.price | currency:'USD':true}}</div>
    <div>
    <span>Location: {{event.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{event.location.city}},{{event.location.country}}</span>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()"> Click Me</button>
    </div>
    `
})

export class EventThumbnailComponent{
@Input() event:IEvent     // techology Event Data Type of Any

@Output() eventClick = new EventEmitter() //Angular event emitter to let parent know

handleClickMe(){
    this.eventClick.emit(this.event.name)
}
}