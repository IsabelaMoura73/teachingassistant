import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[] = [];
   cpfduplicado: boolean = false;
   githubduplicado: boolean = false;

   criarAluno(a: Aluno): void {
     this.alunoService.criar(a)
        .subscribe(
          resultado => {
             if (resultado && resultado.erro) {
                if (resultado.erro === "cpf") this.cpfduplicado = true;
                if (resultado.erro === "github") this.githubduplicado = true;
             } else if (resultado) {
                this.alunos.push(resultado);
                this.aluno = new Aluno();
             }
          },
          msg => { alert(msg.message); }
        );
   }

   onMove(): void {
      this.cpfduplicado = false;
      this.githubduplicado = false;
   }

   ngOnInit(): void {
     this.alunoService.getAlunos()
         .subscribe(
            as => { this.alunos = as; },
            msg => { alert(msg.message); }
         );
   }

}