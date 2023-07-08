import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private snack:MatSnackBar){}
    ngOnInit():void
    {

    }
    btnClick(){
      console.log("Btn Clicked");
      this.snack.open("Welcome to the App","Close");
    }
  

}
