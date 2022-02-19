import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { IconButton } from '@mui/material';
// import { DeleteForever } from '@mui/icons-material';
import "../../assets/css/Cart.scss"
import HeaderViews from '../UICommonComp/HeaderViews';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { MAGIC_NUMBER } from '../../assets/js/helpers';

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


export default function OrdersTable() {
  const [ordersLoaded, setOrdersLoaded] = useState();
  
  useEffect(()=>{
    const db = getFirestore();
    const ordersCollectionQuery = collection(db, 'orders');
    async function loadOrders(){
      try{
      await getDocs(ordersCollectionQuery)
      .then(res => 
        { let data = res.docs.map( order => 
          ({id: order.id, ...order.data()})
          )
          setOrdersLoaded(data)
        }
      )
      }
      catch(e){
        console.error(e)
      }
    }
    loadOrders();
  })

  return (
    <>
      <HeaderViews viewTittle="Ordenes"/>
      <div className="table__container">
        {ordersLoaded?.length > 0 && (

          <TableContainer sx={{display: 'flex', justifyContent: 'center', maxWidth: 1000}} component={Paper}>
              <Table sx={{ maxWidth: 1000, minWidth: 700}} aria-label="customized table">
                  <TableHead>
                      <TableRow>
                        <StyledTableCell align="right">Cliente</StyledTableCell>
                        <StyledTableCell align="right">Correo</StyledTableCell>
                        <StyledTableCell align="right">Día y Hora</StyledTableCell>
                        <StyledTableCell align="right">Precio</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {ordersLoaded?.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="right">{row.buyer.name}</StyledTableCell>
                        <StyledTableCell align="right">{row.buyer.email}</StyledTableCell>
                        <StyledTableCell align="right">
                          {`${row.executionDate.date} ${row.executionDate.time}`}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           € {(row.total/MAGIC_NUMBER).toFixed(2)}
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">
                            <IconButton
                              title="Eliminar"
                              color="error"
                              onClick={() => removeItem(row.item.id)}>
                              <DeleteForever/>
                            </IconButton>
                        </StyledTableCell> */}
                      </StyledTableRow>
                    ))}
                  </TableBody>
              </Table>
          </TableContainer>
          )}
        </div>
    </>
      
    
  );
}