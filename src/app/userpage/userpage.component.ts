import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ReversePipe } from '../pipes/reversePipe';
import { NgOptimizedImage } from '@angular/common';


@Component({
    standalone: true,
    imports: [ReversePipe,NgOptimizedImage],
    selector: 'user-page',
    templateUrl: 'userpage.component.html',
    styleUrl: 'userpage.component.scss'
})

export class UserPage implements OnInit {
    // userService:User = inject(UserService);

    constructor(public user:UserService) { }

    ngOnInit() { }
}