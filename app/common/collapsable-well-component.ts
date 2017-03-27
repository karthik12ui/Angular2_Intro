import{Component } from '@angular/core'

@Component({
selector:'collapsible-well',
template:`
<div (click)="toggleContent()" class="well pointable">

<h4>
<ng-content select="[well-title]"></ng-content>
</h4>
<ng-content *ngIf="visible" select="[well-body]"> </ng-content>
</div>
`
})

export class CollapsabaleWellComponent{

visible: boolean = true;
toggleContent(){
this.visible = !this.visible
}
}