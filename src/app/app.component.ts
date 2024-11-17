import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

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

  // Video 100 - Acessar componente filhos por ViewChild

  // @ViewChild('filhoComp')
  // filhoCompRef!: FilhoComponent;

  // hello() {
  //   this.filhoCompRef.dizerOi();

  //   this.filhoCompRef.message = 'Eu troquei';
  // }

  // Aula 101 - Configuração "static" do "@ViewChild”

  // @ViewChild('meuInput') 
  // meuInputEL!: ElementRef<HTMLInputElement>;

  // constructor() {
    
  // }

  // ngOnInit() {
    
  // }

  // ngAfterViewInit() {
  //   this.meuInputEL.nativeElement.focus();
  // }

}
