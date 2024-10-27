import { Component, inject, OnInit, NgZone, OnDestroy, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { appService } from '../app.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule],
    selector: 'todo-add',
    templateUrl: 'todo-add.component.html',
    styleUrl: 'todo-add.component.scss'
})

export class TodoAdd implements OnInit, OnDestroy, OnChanges, AfterViewChecked {

    constructor(private ngZone: NgZone){}


    appService = inject(appService);
    scrollCount:number = 0;

    todoAddProfile = new FormGroup({
        name:new FormControl('')
    })

    generateUniqueId():number {
        return Math.floor(10000 + Math.random() * 90000);
    }
    

    handleSubmit(){
        if(this.todoAddProfile.value.name){
            this.appService.addTodo({
                name:this.todoAddProfile.value.name,
                id:this.generateUniqueId(),
                completed:false
            })
            this.todoAddProfile.value.name = '';
            this.todoAddProfile.setValue({name:""});
            this.appService.setOpenAddWindow(!this.appService.openAddWindow);
        }
    }
    
    
    ngOnInit() { 
        this.ngZone.runOutsideAngular(()=>{
            window.addEventListener('mouseover',this.onscroll);
        });
    }

    ngOnDestroy(): void {
        window.removeEventListener('mouseover',this.onscroll);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Change happended");
    }

    ngAfterViewChecked(){
        console.log("Change happened UI updated potentially");
    }

    onscroll = () => {
        this.scrollCount = this.scrollCount + 1;

        if(this.scrollCount % 10 === 0){
            this.ngZone.run(()=>{});
        }

    }

}