import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import "../../assets/css/HomeStyles/Header.scss";
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const orderCounts = (data) => data?.docs.length
const OrderWidget = () => {
    const [totalOrders, setTotalOrders] = useState(0);
    useEffect( ()=>{
        const db = getFirestore();
        const ordersCollectionQuery = collection(db, 'orders');

        const getAllOrders = async()=>{
            let getOrders = await getDocs(ordersCollectionQuery);
            
            setTotalOrders(orderCounts(getOrders));
        }

        getAllOrders();
    }, [])
    return (
      <Link to="/orders" className="quick__buttons">
          <div>
              <DeliveryDiningIcon 
                  color="primary"
                  sx={{height:40, width:30, marginRight: 1}} />
          </div>
          <div className="button__container__options">
              <span>Pedidos</span>
              <span>{totalOrders}</span>
          </div>
      </Link>
    )
}

export default OrderWidget