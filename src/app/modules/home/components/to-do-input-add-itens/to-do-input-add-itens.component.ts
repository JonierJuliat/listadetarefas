import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit{
  
  //implementar o metodo decorator output que irá emitir um evento para popular a lista de tarefas
  @Output() public emitItemTasklist = new EventEmitter();

  public addItemTasklist: string = "";

  constructor(){}

  ngOnInit(): void {}

  public submitItemTasklist (){
    this.addItemTasklist = this.addItemTasklist.trim(); //pega o proprio item e remove todos os espaços em branco antes e depois através do método trim
    //metodo if para conferir se não é um item vazio na lista
    if( this.addItemTasklist){this.emitItemTasklist.emit(this.addItemTasklist);
      this.addItemTasklist="";}
      
  }
}
