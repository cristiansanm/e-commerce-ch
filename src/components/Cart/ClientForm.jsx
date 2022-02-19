import { useState } from "react";
import { Button, CircularProgress, Modal, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { styledFormModal } from "../../assets/js/styleObjects";
import { useForm } from "react-hook-form";
import "./../../assets/css/Cart.scss";
import { useCartContext } from "../../context/CartContext";
import { orderData } from "../../assets/js/orderJson"
import { MAGIC_NUMBER } from "../../assets/js/helpers";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    documentId,
    writeBatch,
    getDocs
} from "firebase/firestore"


const ClientForm = ({ itemsOnCart, totalAmount, orderId }) => {
    
    const [open, setOpen] = useState(false);
    const  handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoading, setIsLoading] = useState(false);
    const { emptyCart } = useCartContext();
    //Calculate total items
    let totalItems = itemsOnCart.map( item => {
        let total = 0;
        total += item.quantity;
        return total;
    })

    const [formSubmit, setFormSubmit] = useState({
        name: '',
        email: '',
        phone: '',
        emailRep: ''
    });

    //Handle form in every change
    const handleForm = (e) =>{
        setFormSubmit({ 
            ...formSubmit,
            [e.target.name]: e.target.value
        })
    }
    //Hook for validating errors on the form
    const { 
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();

    //Submit action
    const orderAction = async() =>{
        let order = orderData(itemsOnCart, formSubmit, totalAmount)
        
        setIsLoading(true)
        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        
        await addDoc( ordersCollection, order)
        .then(res => {orderId(res.id)})
        .catch(err => console.error(err))

        const itemsCollection = collection(db, 'items');

        const updateStockQuery = query(
            itemsCollection,
            where(documentId(), 'in', itemsOnCart?.map(item => item.item.id))
        )

        const batch = writeBatch(db);

        await getDocs(updateStockQuery)
        .then(res =>
            {
                res.docs.forEach(resp => 
                batch.update(resp.ref, {
                    stock: resp.data().stock - 
                    itemsOnCart?.find(item => item.item.id === resp.id).quantity
                }));
            
            setIsLoading(false)
            }
        )
        .catch(err => console.error(err))

        batch.commit();
        setFormSubmit({
            name: '',
            email: '',
            phone: '',
            emailRep: ''
        })
        emptyCart();
        handleClose();
    }

    return (
      <>
          <Button 
              onClick={handleOpen}
              variant="contained"
              color="success"
          >
              Checkout
          </Button>
          <Modal
            open={open}
            onClose={handleClose}> 
            <Box sx={styledFormModal}>
                <h2>Formulario de compra</h2>
                <div className="form__info">
                    <div>Cantidad de articulos: <span>{totalItems}</span></div>
                    <div>
                        Monto a pagar: 
                        <span>€ {(totalAmount/MAGIC_NUMBER).toFixed(2)}</span>
                    </div> 
                </div>
                
                <form 
                    className="form__client" 
                    onSubmit={handleSubmit(orderAction)}>
                    <TextField 
                        name="name"
                        {...register("name" , {
                            required: "Campo Requerido"
                        })}
                        value={formSubmit.name}
                        onChange={handleForm}
                        label="Nombre" 
                        variant="outlined"
                        error={errors.name}
                        helperText={errors.name ? errors.name.message : ''}
                        />
                    <TextField 
                        name="phone"
                        {...register("phone", {
                            required: "Campo requerido",
                            validate: {
                                isANumber: value => !isNaN(value) || "Solo se admite números"   
                            }
                        })}
                        value={formSubmit.phone}
                        onChange={handleForm}
                        label="Telefono" 
                        variant="outlined"
                        error={errors.phone}
                        helperText={errors.phone ? errors.phone.message : ''}/>
                    
                    <TextField 
                        name="email"
                        {...register("email", {
                            required: "Campo requerido",
                            pattern: {
                                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                                message: 'El email es inválido',
                            }
                        })}
                        value={formSubmit.email}
                        onChange={handleForm}
                        label="Correo" 
                        variant="outlined"
                        error={errors.email}
                        helperText={errors.email ? errors.email.message : ''}/>
                    
                    <TextField 
                        name="emailRep"
                        {...register("emailRep", {
                            required: "Campo requerido",
                            pattern: {
                                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                                message: 'El email es inválido',
                            },
                            validate: {
                                isEqual: value => value === getValues("email") || "Los correos son diferentes"
                            }
                        })}
                        value={formSubmit.emailRep}
                        onChange={handleForm}
                        label="Repetir el correo" 
                        variant="outlined"
                        error={errors.emailRep}
                        helperText={errors.emailRep ? errors.emailRep.message : ''}
                        />
                    <Button
                        type="submit" 
                        variant="contained">

                        {isLoading ? (
                            <CircularProgress
                                size={24}
                                sx={{
                                  color: 'white',
                                }}/>
                        ) : 'Comprar'}
                    </Button>
                </form>   
            </Box>
          </Modal>
      </>
    )
}

export default ClientForm