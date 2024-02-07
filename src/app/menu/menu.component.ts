import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { EmailService } from '../email.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private emailService:EmailService){}
 
  datiUtente!:UntypedFormGroup;
   


  ngOnInit(): void {
    this.datiUtente = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.email, Validators.required]),
      numero: new UntypedFormControl(null,Validators.required),
      guasto: new UntypedFormControl(null,[Validators.maxLength(100),Validators.required]),
    }); 
  }

   // Funzione chiamata dopo che la vista è stata inizializzata
  
  /*  inviaEmail(form:UntypedFormGroup) {
     if(form.valid){
      console.log("inviata",form)
    }
    
    
   }
 */
//Da vedere
   inviaEmail(datiUtente: UntypedFormGroup) {
    if (datiUtente.valid) {
      const email = String(datiUtente.get('email')?.value);
      const numero = String(datiUtente.get('numero')?.value);
      const guasto = String(datiUtente.get('guasto')?.value);
      this.emailService.invioEmail(email,numero,guasto).subscribe((c)=>{
        console.log(email,numero,guasto)

      });
    }
    }

 
}
