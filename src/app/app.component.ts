import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{

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
  // }

  buttonsList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ];

  @ViewChildren('meuButton')
    buttonsEL!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {

    //Esse método é chamado toda vezque a estrutura do viewChild é alterada. 
    this.buttonsEL.changes.subscribe((result) => {
      console.log(result)
    });
  
  }

  changeColor(event: Event){

    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'red';
    btnElement.style.color = 'blue';

  }

  resetButton(){
    this.buttonsEL.forEach(
      (btnEl) => {
        btnEl.nativeElement.style.backgroundColor = '';
        btnEl.nativeElement.style.color = 'black';
      }
    )
  }

  firstButton(){
    //const primeiro = this.buttonsEL.get(0);

    const primeiro = this.buttonsEL.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

  }

  remove() {
    //Esse método é nativo e remove o primeiro item da lista
    this.buttonsList.shift();
  }





}
