import { Injectable } from "@angular/core";
import { TodoInterface } from "./todoInterface";

@Injectable({
    providedIn:"root"
})

export class appService{
    openAddWindow: boolean = true;
    todos:TodoInterface[] = new Array();

    setOpenAddWindow(state: boolean){
        this.openAddWindow = state;
    }

    getOpenAddWindow():boolean{
        return this.openAddWindow;
    }

    getTodos():TodoInterface[]{
        return this.todos;
    }

    addTodo(todo: TodoInterface){
        this.todos.push(todo);
    }

    updateTodoList(todos: TodoInterface[]){
        this.todos = todos;
    }
}