import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCartContext } from '../../context/CartContext';
import { IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import "../../assets/css/Cart.scss"
import { MAGIC_NUMBER } from "../../assets/js/helpers"
import { formatCategory } from "../../assets/js/formaters"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#82a0c4',
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CartTable() {
  const { cartList, calculateSubPrice, calculateTotalPrice, removeItem } = useCartContext(); 
  return (
      <div className="table__container">
      {cartList?.length > 0 && (

        <TableContainer sx={{display: 'flex', justifyContent: 'center', maxWidth: 1000}} component={Paper}>
            <Table sx={{ maxWidth: 1000, minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                      <StyledTableCell>Imagen</StyledTableCell>
                      <StyledTableCell align="right">Nombre</StyledTableCell>
                      <StyledTableCell align="right">Categoría</StyledTableCell>
                      <StyledTableCell align="right">Cantidad</StyledTableCell>
                      <StyledTableCell align="right">Precio (Subtotal)</StyledTableCell>
                      <StyledTableCell align="right">Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {cartList?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        <img 
                          src={row.item.img} 
                          width="60"
                          alt="img"/>
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.item.model}</StyledTableCell>
                      <StyledTableCell align="right">{formatCategory[row.item.category]}</StyledTableCell>
                      <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                      <StyledTableCell align="right">
                          € {(calculateSubPrice(row.quantity, row.item.price) / MAGIC_NUMBER ).toFixed(2)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                          <IconButton
                            title="Eliminar"
                            color="error"
                            onClick={() => removeItem(row.item.id)}>
                            <DeleteForever/>
                          </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <StyledTableRow>
                      <StyledTableCell align="left" colSpan={3}>
                          Total: 
                      </StyledTableCell>
                      <StyledTableCell align="right" colSpan={3}>
                          € {(calculateTotalPrice() / MAGIC_NUMBER).toFixed(2)}
                      </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
        )}
      </div>
    
  );
}