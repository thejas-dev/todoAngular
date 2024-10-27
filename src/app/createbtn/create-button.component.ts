import { Component, inject, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { appService } from '../app.service';

@Component({
    standalone: true,
    imports: [MatIconModule, FontAwesomeModule],
    selector: 'create-button',
    templateUrl: 'create-button.component.html',
    styleUrl: 'create-button.component.scss'
})

export class CreateButton {
    openAddWindow: boolean = false;

    appService = inject(appService);
    
    constructor(private renderer: Renderer2) {
    }

    faPlus = faPlus;

    setOpenAddWindow(){
        this.appService.setOpenAddWindow(!this.appService.openAddWindow);
        this.renderer.selectRootElement("#todoInput").focus();
    }

}