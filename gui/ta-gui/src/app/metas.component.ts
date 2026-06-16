import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   alunos: Aluno[] = [];

   atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno)
         .subscribe(
            a => { if (a == null) alert("Erro ao atualizar aluno"); },
            msg => { alert(msg.message); }
         );
   }

   ngOnInit(): void {
      this.alunoService.getAlunos()
         .subscribe(
            alunos => { this.alunos = alunos; },
            msg => { alert(msg.message); }
         );
   }

}