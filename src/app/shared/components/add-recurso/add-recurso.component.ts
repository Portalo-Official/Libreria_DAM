import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shared-add-recurso',
  templateUrl: './add-recurso.component.html',
})
export class AddRecursoComponent implements OnInit{

  @Input() listElements! : string[];
  @Input() oldElement! : string;
  @Input() tipo! : string; // Si es Tema, Autor, Formato o Edicion
  @Input() modo! : string; // Si esta en crear o modificar
  @Output() emitNewNombre: EventEmitter<string>;

  fieldForm!: FormGroup;
  messageError?: string;

  constructor( private fb : FormBuilder){
    this.emitNewNombre = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.fieldForm = this.fb.group({
      Nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.]*[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\\s.]+')
        ]
      ]
    });
    this.fieldForm.setValue({
      Nombre: this.oldElement
    });
  }
  emitirNewElement():void{
    if(this.fieldForm.valid)
      this.emitNewNombre.emit(this.fieldForm.get('Nombre')!.value);
  }
  isValid(): boolean{
    this.getMessageError();
    if(this.fieldForm.touched)
      return this.fieldForm.valid;
    return true;
  }

  getMessageError():void{
    if(this.fieldForm.controls['Nombre'].getError('minLength'))
      this.messageError='Minimo 3 letras.';
    else if(this.fieldForm.controls['Nombre'].getError('required'))
      this.messageError='Este campo es requerido.';
    else if(this.fieldForm.controls['Nombre'].getError('pattern'))
      this.messageError='No pueder ser carácteres especiales.';
    // console.log(this.fieldForm.controls['Nombre'].errors);
  }



}
