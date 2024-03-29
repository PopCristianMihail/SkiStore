import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { currencyFormat } from '../../app/utils/util';
import { useAppSelector } from '../../app/store/configureStore';

export default function BasketSummary() {
  const { basket } = useAppSelector((state) => state.basket);
  const subtotal =
    basket?.items.reduce((acc, item) => acc + item.quantity * item.price, 0) ??
    0;
  const deliveryFee = subtotal / 100 > 1000 ? 0 : 49.99;

  return (
    <>
      <TableContainer component={Paper} variant={'outlined'}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>{currencyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align='right'>{deliveryFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align='right'>
                {currencyFormat(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: 'italic' }}>
                  *Orders over $1000 qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
