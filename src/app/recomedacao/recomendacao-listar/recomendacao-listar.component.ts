import { Component, Input } from '@angular/core';
import { Recomendacoes } from '../recomedacao.interface';

@Component({
  selector: 'app-recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css'],
})
export class RecomendacaoListarComponent {
  constructor() {}

  @Input() recomendacoes: Recomendacoes[] = [];
}
