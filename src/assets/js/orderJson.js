import moment from "moment";
import "moment/locale/es";

export const orderData = (itemsOnCart, formSubmit, totalAmount) => {
    let date= new Date();
        
    let order = {};
    order.buyer = formSubmit;
    order.total = totalAmount;
    order.items = itemsOnCart?.map( item => {
        let id = item.item.id;
        let itemName = item.item.model;
        let price = item.item.price * item.quantity;
        let quantity = item.quantity;
        return {
            id,
            itemName,
            price,
            quantity
        }
    })
    order.executionDate= {
        date: moment(date).format("yyyy-MM-DD"),
        time: moment(date).format("LTS")
    }

    return order;
}