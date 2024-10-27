import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, 
    SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { TodoInterface } from '../todoInterface';
import { faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [FontAwesomeModule,CommonModule],
    selector: 'todo-list-item',
    templateUrl: 'todo-list-item.component.html',
    styleUrl: 'todo-list-item.component.scss'
})

export class TodoListItem implements OnInit, OnDestroy, OnChanges {
    
    @Input() item:TodoInterface = {name:"",id:0,completed:false};
    @Output() removeTodo = new EventEmitter<number>;
    @Output() completeTodo = new EventEmitter<number>;
    @ViewChild("title") title!:ElementRef;

    faTrashCan = faTrashCan;
    faCircleCheck = faCircleCheck;

    removeTodoFunc(){
        console.log("Removing " + this.item.id);
        this.removeTodo.emit(this.item.id);
    }

    completeTodoFunc() {
        console.log("Completing " + this.item.id);
        this.completeTodo.emit(this.item.id);
    }
    
    checkElement(){
        console.log(this.title.nativeElement.innerText);
    }

    whoAmI(){
        console.log("I am todo list item");
    }

    constructor() { }

    ngOnInit() {
        console.log("Initialzing " + this.item.id);
    }

    ngOnDestroy(): void {
        console.log("Destroying " + this.item.id);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Change in " + this.item.id + " and the change is ");
        console.log(changes?.["item"]);
    }

}