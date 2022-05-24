import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    {nome: 'Camila Taruma', idade: 27, email: 'camila.taruma@gmail.com', curso:'Ciência da Computação'},
    {nome: 'Isabel Martins', idade: 24, email: 'isabel.martins@gmail.com', curso:'Analise de Sistemas'},
    {nome: 'Maria Coelho', idade: 25, email: 'maria.coelho@gmail.com', curso:'Engenharia de Software'},
    {nome: 'Pedro Cardoso', idade: 21, email: 'pedro.cardoso@gmail.com', curso:'Ciência da Computação'},
    {nome: 'Cláudio Pires', idade: 20, email: 'claudio.pires@gmail.com', curso:'Informática'},
    {nome: 'Renato Oliveira', idade: 22, email: 'renato.oliveira@gmail.com', curso:'Programação'}
  ];

  diplayedColumns: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
