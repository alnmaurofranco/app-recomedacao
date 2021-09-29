import { Component, EventEmitter, Output } from '@angular/core';
import { Recomedacoes } from '../recomedacao.interface';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css'],
})
export class RecomendacaoInserirComponent {
  @Output() recomendacaoInserida = new EventEmitter<Recomedacoes>();
}
