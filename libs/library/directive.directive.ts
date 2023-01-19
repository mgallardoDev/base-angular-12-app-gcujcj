import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';
import {  SERVICE_INYECTION_TOKEN } from './library.module';

@Directive({
  selector: '[directive]',
})
export class DirectiveDirective implements AfterViewInit {
  @Input() methodName: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Inject(SERVICE_INYECTION_TOKEN) private service: any
  ) {}
    
    ngAfterViewInit(): void {
    this.element.nativeElement.innerText += this.service[this.methodName]()

    this.renderer.setValue(this.element.nativeElement, this.service[this.methodName]())
  }
}
