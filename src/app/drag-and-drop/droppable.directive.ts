import { Directive, Output, ElementRef, EventEmitter, OnInit, HostListener } from '@angular/core';

@Directive({ 
    selector: '[hurtDroppable]'
})

export class DroppableDirective implements OnInit {

    @Output('droppable') drop: EventEmitter<any> = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    //this is much better than dragenter solution since
    //dragleave fires on other elements
    @HostListener('dragover', ['$event'])
    onDragOver(event): void {
        this.elementRef.nativeElement.classList.add('droppable-hover');

        //drop event doesn't trigger without this for some reason
        event.preventDefault();
        event.stopPropagation();
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event): void {
        this.elementRef.nativeElement.classList.remove('droppable-hover');
    }

    @HostListener('drop', ['$event'])
    onDrop(event) {

        event.preventDefault();
        event.stopPropagation();

        console.log('drop event');

        let files = event.dataTransfer.files;

        if(files.length > 0){
            this.drop.emit(files);
        }

        this.elementRef.nativeElement.classList.remove('droppable-hover');
    }

    ngOnInit() {
        let element = this.elementRef.nativeElement;
    }
}