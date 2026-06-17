import { Aluno } from '../../common/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): any {
    if (!this.cpfNaoCadastrado(aluno.cpf)) {
      return { erro: "cpf" };
    }
    if (!this.githubNaoCadastrado(aluno.github)) {
      return { erro: "github" };
    }
    var result = new Aluno();
    result.copyFrom(aluno);
    this.alunos.push(result);
    return result;
  }

  remover(cpf: string): boolean {
    const index = this.alunos.findIndex(a => a.cpf == cpf);
    if (index >= 0) {
      this.alunos.splice(index, 1);
      return true;
    }
    return false;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }

  githubNaoCadastrado(github: string): boolean {
     return !this.alunos.find(a => a.github == github);
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}