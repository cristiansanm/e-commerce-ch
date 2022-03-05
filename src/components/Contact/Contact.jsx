import HeaderViews from '../UICommonComp/HeaderViews';
import ContactFields from './ContactFields';
import { Grid } from "@mui/material";
import phone from "../../assets/img/phone-call.png";
import location from "../../assets/img/your-location.png";
import clock from "../../assets/img/clock.png"
const Contact = () => {
  return (
    <div>
        <HeaderViews viewTittle="Contacto"/>
        <Grid container spacing={5} justifyContent="center" py={4}>
          <Grid item>
            <ContactFields
              message="Contáctanos al numero +31 912 33 43 21 o escribenos un mensaje de texto"
              imageHeader={phone}
              title="Contacto"/>
          </Grid>
          <Grid item>
            <ContactFields
            message="Estamos localizados en Calle San Francisco 348, Valencia, Región de Valencia, España"
            imageHeader={location}
            title="Ubicación"/>
          </Grid>
          <Grid item>
            <ContactFields
            message="Abrimos de 10 a.m. hasta las 6 p.m. Sábados de 10 a.m a 3 p.m"
            imageHeader={clock}
            title="Horarios"/>
          </Grid>
        </Grid>
        
    </div>
    );
};

export default Contact;
