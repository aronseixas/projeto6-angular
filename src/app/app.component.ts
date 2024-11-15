import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  //Aula 99 Acessar Elemento HMTL com ViewChild
  // @ViewChild('meuInput') 
  // meuInputEL!: ElementRef<HTMLInputElement>;

  // @ViewChild('divInicial') 
  // divInicial!: ElementRef<HTMLDivElement>;

  // updateInputText(){
  //   this.meuInputEL.nativeElement.value = 'Texto Atualizado';
  // }

  // foco(){
  //   this.meuInputEL.nativeElement.focus();
  // }
  
  // updateDivContent(){
  //   this.divInicial.nativeElement.textContent = 'AAAHHHH';
  // }


}
