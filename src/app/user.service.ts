import { Injectable } from "@angular/core";
import { User } from "./userInterface";

@Injectable({
    providedIn:"root",
})

export class UserService{
    public username:string = "Thejas Hari";
    public age:string = "21";
    public profession:string = "Software Engineer";
    public proficientIn:string = "React, Angular, Flutter";
    public experience:string = "1 year";
    public image:string = "profile.avif";

    getUserData():User {
        return {
            username:this.username,
            age:this.age,
            profession:this.profession,
            proficientIn:this.proficientIn,
            experience:this.experience,
            image:this.image
        }
    }

}