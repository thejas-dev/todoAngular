import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule],
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.scss'
})

export class Login implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    loginForm = new FormGroup({
        email:new FormControl(''),
        password:new FormControl('')
    })

    async handleSubmit(){
        console.log(this.loginForm.value.email + " " + this.loginForm.value.password);
        const res = await this.authService.login(this.loginForm.value.email,this.loginForm.value.password) == true
        console.log(res);
        if(res){
            this.router.navigate(['/user']);
        }else{
            alert("Incorrect credentials")
        }
    }

    ngOnInit() { }
}