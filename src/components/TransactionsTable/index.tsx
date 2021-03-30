import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/01/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/04/2017</td>
          </tr>
          <tr>
            <td>Reembolso Cliente</td>
            <td className="withdraw">- R$7.000</td>
            <td>Prestação de serviço</td>
            <td>15/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
