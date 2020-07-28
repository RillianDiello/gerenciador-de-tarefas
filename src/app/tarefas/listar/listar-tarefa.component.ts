import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared'

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos() : Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  //evento é um evento padrão do navegador q evita atualização da pagina
  remover($event: any, tarefa: Tarefa) : void{
    $event.preventDefault(); //por isso usamos a limpeza com o default
    if(confirm('Deseja Remover a tarefa"' +tarefa.nome+ '"?' )){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa : Tarefa): void{
    if(confirm('Deseja alterar o status da tarefa"'+ tarefa.nome+ '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }



}
