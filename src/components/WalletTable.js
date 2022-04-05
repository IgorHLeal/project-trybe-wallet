import React, { Component } from 'react';

export default class WalletTable extends Component {
  render() {
    return (
      /* table: define uma tabela */
      <table>
        {/* thead: Agrupa o conteúdo do cabeçalho em uma tabela */}
        <thead>
          {/* tr: Define uma linha em uma tabela */}
          <tr>
            {/* th: Define uma célula de cabeçalho em uma tabela */}
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
      </table>
    );
  }
}

// ---------- REFERÊNCIAS ----------
// https://www.w3schools.com/html/html_tables.asp
