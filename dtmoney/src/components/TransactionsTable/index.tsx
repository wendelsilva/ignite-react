import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[]);

  return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categorias</th>
                      <th>Data</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td>
                          desenvolvimento de website
                      </td>
                      <td className="deposit">R$12.000</td>
                      <td>desenvolvimento</td>
                      <td>30/04/2021</td>
                  </tr>
                  <tr>
                      <td>
                          Aluguel
                      </td>
                      <td className="withdraw">- R$1.000</td>
                      <td>Casa</td>
                      <td>30/04/2021</td>
                  </tr>
              </tbody>
          </table>
      </Container>
  ) 
}