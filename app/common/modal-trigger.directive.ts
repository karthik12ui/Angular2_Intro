import {Directive,OnInit,Inject,Input,ElementRef} from'@angular/core'
import{JQ_TOKEN} from './jQuery.service'
@Directive({
    selector:'[modal-trigger]' // Indicates it is attribute selector not an element

})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string; 

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({})
    })
  }
}