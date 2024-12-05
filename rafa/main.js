import Fornecedor from "./Fornecedor.js";
import FornecedorPessoa from "./FornecedorPessoa.js";

const fornecedor = new Fornecedor("Rafa","(00) 0000-0000")

console.log(`Dados do Fornecedor:
Nome:${fornecedor.getNome()}
Fone:${fornecedor.getFone()}`
);

const fornecedorPessoa = new FornecedorPessoa("Rafa","(00) 0000-0000", "12.345.669-5", "123.456.789-06")

console.log(`Dados do Fornecedor:
Nome:${fornecedorPessoa.getNome()}
Fone:${fornecedorPessoa.getFone()}
Rg:${fornecedorPessoa.getRg()}
Cpf:${fornecedorPessoa.getCpf()}`
);