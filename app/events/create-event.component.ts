import {Component,Inject} from'@angular/core'
import{FormControl,FormGroup,Validators} from '@angular/forms'
import{Router} from '@angular/router'

import {EventService} from './shared/index'

import{TOASTR_TOKEN, Toastr} from '../common/toastr.service'

@Component({
    templateUrl:'../app/events/create-event.component.html',
     styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
})
export class CreateEventComponent{

        isDirty:boolean = true
        
       constructor(private router:Router,
                    private eventService:EventService,
                     @Inject(TOASTR_TOKEN) private toastr:Toastr){

        }
        cancelEventCreate(){
        this.router.navigate(['/events'])
    }
      saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false;
    this.toastr.success('New Event Created... :)');
    this.router.navigate(['/events'])
  }
}