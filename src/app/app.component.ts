import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: any[] = [
    {
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      title: 'Angular',
      description:
        'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.',
      extraInfo: 'Lançamento: 14 setembro 2016; há 5 anos',
    },
    {
      imgUrl: 'https://logospng.org/download/react/logo-react-256.png',
      title: 'React',
      description:
        'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros',
      extraInfo: 'Lançamento: 29 de maio de 2013 (8 anos)',
    },
    {
      imgUrl: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
      title: 'Vue.js',
      description:
        'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
      extraInfo: 'Lançamento: Fevereiro de 2014; há 5 anos',
    },
  ];

  valorDoMeuInput: string = 'valor inicial';

  error: boolean = false;

  cardImage: string = 'https://www.fillmurray.com/640/360';
  cardTitle: string = 'Meu Card';
  cardDescription: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ";
  cardButtonText: string = 'Clique aqui!';

  cardButtonClickCount: number = 0;

  data: Date = new Date();

  nomes: string[] = ['João', 'Maria', 'José', 'Carlos', 'Igor'];

  texto: string = 'Um texto qualquer';

  urlImage: string = 'https://picsum.photos/seed/picsum/100/100';

  inputValue: string = '';

  constructor() {
    setInterval(() => {
      this.error = !this.error;
      this.data = new Date();
    }, 1000);
  }

  mostrarError(): boolean {
    return false;
  }

  getAlertClassName(): string {
    return 'alert-warning';
  }

  onBlur(event) {
    console.log(event);
  }

  onKeyUp(event) {
    this.inputValue = event.target.value;
  }

  onEvent(event) {
    this.cardButtonClickCount++;
  }

  getValor() {
    return 1;
  }

  getValorNulo() {
    return null;
  }
}
