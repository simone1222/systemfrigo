import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';



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

  /*  inviaEmail(form:UntypedFormGroup) {
     if(form.valid){
      console.log("inviata",form)
    }
    
    
   }
 */
//Da vedere
   inviaEmail() {
    if (this.datiUtente.valid) {
      const email = this.datiUtente.get('email')?.value;
      const numero = this.datiUtente.get('numero')?.value;
      const guasto = this.datiUtente.get('guasto')?.value;

      // Configura le tue credenziali Email.js e il servizio di invio email
      const datiEmail = {
        service_id: 'il_tuo_service_id',
        template_id: 'il_tuo_template_id',
        user_id: 'il_tuo_user_id',
        template_params: {
          to_email: 'destinatario@example.com',
          from_email: email,
          subject: 'Assistenza guasto',
          content: `Contenuto dell'email: ${JSON.stringify({ guasto, numero })}`,
        },
      };

      // Invia l'email utilizzando Email.js
      emailjs.send(datiEmail.service_id, datiEmail.template_id, datiEmail.template_params, datiEmail.user_id)
        .then((risposta) => {
          console.log('Email inviata con successo:', risposta);
        })
        .catch((errore) => {
          console.error('Errore durante l\'invio dell\'email:', errore);
        });
    }
  }

 
}
