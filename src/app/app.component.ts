import { Component } from '@angular/core';
import { Recomedacoes } from '../app/recomedacao/recomedacao.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recomendacoes: Recomedacoes = [];

  onRecomendacaoInserida(recomendacoes: Recomedacoes) {
    this.recomendacoes = [...this.recomendacoes, recomendacoes];
  }
}
