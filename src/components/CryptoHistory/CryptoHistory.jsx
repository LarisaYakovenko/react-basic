import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from '../../utils/dataFormat';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, i) => {
          return (
            <Tr key={id}>
              <Td>{i + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{formatDate(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
