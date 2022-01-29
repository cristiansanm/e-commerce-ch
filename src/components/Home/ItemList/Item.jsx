import React, { useState } from 'react'
import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EuroIcon from '@mui/icons-material/Euro';
import './../../../assets/css/Item.scss'
import SnackBar from '../../UICommonComp/SnackBar';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { MAGIC_NUMBER } from '../../../assets/js/helpers'
import { itemCountMain } from '../../../assets/js/styleObjects'

function Item({data}) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('Default Message');
    const [type, setType] = useState('info');
    const handleClose = () => {
        setOpen(false);
    }
    let categoryIndex = data?.category;
    let price = data?.price;
    const onAdd = (count) => {
        setOpen(true);
        setType('success');
        setMessage(`Se agregó ${count} producto(s) al carrito`)
    }
    return (
        <>
            <Card sx={{ width: 345, margin: '0.5rem' }}>
            <CardHeader
                sx={{
                    '& span':{
                        textAlign: 'center'
                    }
                }}
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        {(categoryIndex.slice(0, 1).toUpperCase())}
                    </Avatar>
                }
                action={
                    <Link title="Detalles" className="detail__hover"  to={`/detail/${data?.id}`}>
                        <InfoIcon fontSize="large"/>
                    </Link>
                }
                title={data?.model}
                subheader={`By ${data?.manufacturer} ®`}
            />
            <CardMedia
                component="img"
                height="300"
                image={data?.img}
                alt="img"
            />
            <CardContent>
                <div className="price__container" aria-label="settings">
                    <EuroIcon sx={{marginTop: '-2px', marginRight: '5px'}}/>
                    <span>{price/MAGIC_NUMBER}.00</span>
                </div>
                <ItemCount 
                    stock={data?.stock} 
                    onAdd={onAdd}
                    styleCount={itemCountMain}
                />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <span className="stock__container">{`Stock: ${data?.stock}`}</span>
            </CardActions>
            <SnackBar open={open} handleClose={handleClose} type={type} message={message}/>
            </Card>
        </>
    )
}

export default Item
