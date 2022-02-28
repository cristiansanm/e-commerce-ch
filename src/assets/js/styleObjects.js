
export const activeStyle = {
    textDecoration: 'underline',
    color: 'white',
}
export const listNavStyle = {
    width: "10%", 
    maxWidth: 360,
    minWidth: 200, 
    background: 'linear-gradient(to bottom, #0943AEFF, #374e81);',
    '& a': { 
        textDecoration: 'none',
        color: 'white'
    },
    '& span':{
        fontFamily: 'Rubik,sans-serif',
        fontWeight: '600',
    }
}
export const mainLinkNavStyle = {
    '& a':{
        textDecoration: "none",
    },
    color: 'white',
    fontSize: "1rem",
    fontFamily: 'Rubik,sans-serif',
    fontWeight: "600",
    letterSpacing: "0.00938em",
    textTransform: "capitalize",
}
export const itemCountMain = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
export const itemCountDetail = {
    display:'flex',
    flexDirection: 'column',
}
export const scrollTopButton = {
    background: '#1565c0',
    position: 'fixed',
    bottom: '2%',
    right: '1.5%',
    borderRadius: '50%',
    padding: '1rem',
    color: 'white',
    '&:hover':{
        background: '#5c90cb',
    }
}
export const backToMenuButton = {
    marginTop: '10px',
    marginLeft: '10px',
    background: '#1565c0',
    color: 'white',
    '&:hover':{
        background: '#5c90cb',
    }
}
export const textInputFooter = {
    marginTop: '20px',
    background: 'white',
    borderRadius: '4px',
}

export const styledFormModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:'white',
    border: '2px solid #1565c0',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
}

export const secondPartHeader = {
    display: 'flex',
    justifyContent : 'flex-end',
    '@media (max-width: 1198px)':{
        justifyContent : 'center',
    }
}

export const accountButton = {
    color: '#0943AEFF',
    border: '1px solid #0943AEFF'
}

export const quickButtonsContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "space-around"
}

export const secondCompHeader = {
    logoGrid: {
        display:"flex",
        justifyContent:"flex-start",
    },
    quickActions: {
        justifyContent:"flex-end",
    }
}