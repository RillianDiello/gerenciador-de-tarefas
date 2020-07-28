import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {
  @Input() tarefaConcluida: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      //nativeElement é o elmento proprio
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
