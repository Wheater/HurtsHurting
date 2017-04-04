import { Directive, Output, ElementRef, EventEmitter, OnInit, HostListener } from '@angular/core';

@Directive({ 
    selector: '[hurtDroppable]',
})

export class DroppableDirective implements OnInit {

    @Output('droppable') drop: EventEmitter<any> = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    @HostListener('dragenter', ['$event'])
    onDragEnter(event): void {
        this.elementRef.nativeElement.classList.add('droppable-hover');
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event): void {
        this.elementRef.nativeElement.classList.remove('droppable-hover');
    }

    @HostListener('drop', ['$event'])
    onDrop(event) {
        const data =  JSON.parse(event.dataTransfer.getData('Text'));

        this.drop.next(data);
    }

    ngOnInit() {
        let element = this.elementRef.nativeElement;
    }
}