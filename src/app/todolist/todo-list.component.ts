import { Component, inject, OnInit, OnDestroy, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { appService } from '../app.service';
import { TodoInterface } from '../todoInterface';
import { TodoListItem } from '../todolistitem/todo-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [TodoListItem,CommonModule],
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrl: 'todo-list.component.scss'
})

export class TodoList implements OnInit, OnDestroy {
    constructor() { }

    appService = inject(appService);
    todoList:TodoInterface[] = this.appService.getTodos();
    @ViewChild(TodoListItem) todoListItem!:TodoListItem;

    removeTodoFunc(id: number){
        let temp = this.todoList;
        temp = temp.filter(todo=>{
            return todo.id !== id;
        })

        console.log(temp);
        this.appService.updateTodoList(temp);
        this.todoList = this.appService.getTodos();
    }

    completeTodoFunc(id: number){
        let temp = this.todoList;
        let idx:number= temp.findIndex(todo=>todo.id === id);
        if(idx > -1){
            let tempTodo:TodoInterface = {...temp[idx],completed:true};
            temp.splice(idx,1,tempTodo);
    
            console.log(temp);
            this.appService.updateTodoList(temp);
            this.todoList = this.appService.getTodos();
        }
    }

    ngOnInit() {
        console.log("Initialized");
    }

    ngAfterViewInit() {
        console.log(this.todoListItem.whoAmI()); // I am a pup component!
      }

    ngOnDestroy(): void {
        console.log("Destroying");
    }

    trigger(): void {
        this.todoListItem.whoAmI(); // I am a pup component!
        
    }
    
}