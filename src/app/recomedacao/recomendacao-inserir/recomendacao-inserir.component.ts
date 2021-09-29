import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recomedacoes } from '../recomedacao.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css'],
})
export class RecomendacaoInserirComponent {
  @Output() recomendacaoInserida = new EventEmitter<Recomedacoes>();

  onRecomendacaoAdicionar(form: NgForm) {
    const { invalid, value } = form;

    if (invalid) return;

    const recomendacao: Recomedacoes = {
      id: uuid(),
      title: value.title,
      message: value.message,
      createdAt: new Date(),
    };

    this.recomendacaoInserida.emit(recomendacao);
    form.resetForm();
  }
}
