import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  
  datiUtente!:UntypedFormGroup;



  ngOnInit(): void {
    this.datiUtente = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.email, Validators.required]),
      numero: new UntypedFormControl(null,Validators.required),
      guasto: new UntypedFormControl(null,[Validators.maxLength(100),Validators.required]),
    }); 
  }

   inviaEmail(form:UntypedFormGroup) {
     if(form.valid){
      console.log("inviata",form)
    }
    
    
   }

 
}
