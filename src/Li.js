import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { addCart,delToCart } from './Crete';
import { useDispatch } from 'react-redux';

const Li =()=> {
        const mobile = [{
        id:1,
        tittle: "Xiaomi 15 Ultra",
        price: "$1,09,9999",
        img: "https://i03.appmifile.com/305_item_in/11/03/2025/2d4702802a20bba096cbe741814ae87b.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: 2,
        tittle: "Xiaomi 14 Ultr",
        price: "$80,000",
        img: "https://i03.appmifile.com/329_item_in/11/04/2025/2a9e8ffe9a3772b764bc3b9cb4e83576.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: 3,
        tittle: "Xiaomi 14 CIVI",
        price: "$50,000",
        img: "https://i03.appmifile.com/327_item_in/06/08/2024/784824caf4ebe3e6cef22a2c34de5e66.jpg?thumb=1&w=500&f=webp&q=85"
    },]
    const redmi = [{
        id: "4",
        tittle: "Redmi Note 14 Pro+ 5G",
        price: "20,000",
        img: "https://i03.appmifile.com/942_item_in/17/12/2024/35ce3d67c8df46482bcf534c9339e578.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "5",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/201_item_in/17/12/2024/0321927c81d71d28eb19b7ac43b4c86d.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "6",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/201_item_in/17/12/2024/0321927c81d71d28eb19b7ac43b4c86d.png?thumb=1&w=500&f=webp&q=85"
    }]

    const ironCa=useSelector((state)=>state.cart.cartItem)
    const dis=useDispatch();
const ev=(bag)=>{
    dis(addCart(bag))
}
  return (
<div>
{
mobile.map((bag)=>(
<div key={bag.id}>
<h1>{bag.tittle}</h1>
<img src={bag.img} alt='' />
{
    ironCa.find((items)=> items.id === bag.id) ? 
    <button>remove</button>:
    <button onClick={()=>ev(bag)}>Add</button>
}

</div>
))
}

</div>
)
}

export default Li
