import '../navbar/navbar.css'
//  import { useSearchParams } from 'react-rout er-dom'
// import { useSearchParams } from "react-router-dom";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import create from '../../context/context';
import TemporaryDrawer from '../store/drawer';

export default function Navbar({cartData}) {
  // console.log(cartData,"crat")
   // const [searchParams,setSearchParams]= useSearchParams()
   // const [cart,setCart] = useState(0)
   const [open ,setOpen] = useState(false)
    const navlist = ["ALL","ELECTRONICS","JEWELERY","MAN'S CLOTHING","WOMEN'S CLOTHING"]
  const {cart,setCart} = useContext(create)

    useEffect(()=>{
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      setCart(cart)
    },[])
   return (
      <>
        <navbar>
         <div className="logo">
            Ecomerce Store
         </div>
         <ul className="ul" >
            {navlist.map((item)=>(<button style={{
               background: "none",
               border:"none",
               color:"white",
               fontWeight:"bolder"
            }}>{item}</button>))}
         </ul>
         <div>
         <IconButton onClick={()=> setOpen(true)} style={{
            display: {xs:"none",sm:"block"},
            color: "white",
            marginTop: 5,
            marginRight: 10
         }}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cart.length} color="error">
            {/* <NotificationsIcon /> */}
            <ShoppingCartIcon/>
          </Badge>
          
        </IconButton>
        <TemporaryDrawer cartData={cartData} open={open} setOpen={setOpen}/>
        </div>
        </navbar>
      </>)
}