import sadness  from "../../assets/img/sadness.png"
import wink from "../../assets/img/wink.png"
import "../../assets/css/UICommonComp/NoContent.scss"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
const NoContent = ({ message, title }) => {
  return (
    <div className="noContent__container">
        <div 
          className="noContent__title">
            {title}
        </div>
        <img 
          src={sadness} 
          width="250" 
          alt="sad" />
        <div 
          className="noContent__message"> 
          {message} 
          <img 
            src={wink}
            width="32" 
            alt="winky" />
        </div>
        <Link to="/">
          <Button 
            variant="contained">
              Comprar ahora
          </Button>
        </Link>
    </div>
  )
}

export default NoContent