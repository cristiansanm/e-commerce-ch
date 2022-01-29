
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
