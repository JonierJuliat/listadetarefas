import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list'; 
import { first } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck{

  //metodo publico que chama um novo array de tarefas, e chama no localStora os itens armazenados
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){}

  ngDoCheck(){
    this.setLocalStorage();
  }
  //ngOnInit(): void{}

  //
  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false });
  }

  //função que irá adquirir o numero do item no array e irá excluir apenas este item
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  //função que irá apagar todos os itens da lista, eliminando todos os itens do array
  public deleteAllItensTasklist(){
    //metodo que irá realizar a confirmação do comando apagar tudo
    const confirm = window.confirm("Deseja realmente apagar todos os itens");
    //se a resposta for confirmada o comando será executado
    if(confirm){
      this.taskList= [];    
    } 
  }

  //funcão para validar se o campo task está vazio 
  public validationInput(event: string, index:number) {
    if(!event.length){
      const confirm = window.confirm("tarefa está vazia, deseja deletar?");
      
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
  //cria uma ordenação na listagem para trazer os checados para parte debaixo da lista
    public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last)=> Number(first.checked)- Number(last.checked)); 
      //local storage prove o armazenamento local dos itens
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
