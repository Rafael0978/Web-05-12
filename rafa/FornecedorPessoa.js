import Fornecedor from "./Fornecedor.js";

class FornecedorPessoa extends Fornecedor{

    constructor(nome="sem nome", fone="(00) 0000-0000", rg="000.000.000-0", cpf="000.000.000-00"){
        super(nome, fone);
        this.rg = rg
        this.cpf = cpf

    }

    setRg(rg){
        this.rg = rg
    }

    getRg(){
    return this.rg
    }

    setCpf(cpf){
        this.cpf = cpf
    }

    getCpf(){
    return this.cpf
    }

}
export default FornecedorPessoa;