import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let [cart,setCart]=useState(0)
  let datas=[ {
    name: 'Fancy Products',
    image:'https://www.jiomart.com/images/product/original/rvr0thxocc/carry-orange-plastic-microwave-safe-round-full-plates-with-bowl-set-6-pc-product-images-orvr0thxocc-p594540077-1-202210161305.jpg?im=Resize=(420,420)',
    price: '$40.00 - $80.00',
    sale: false,
    originalPrice: "",
    original: false,
    reviews: false,
  },
  {
    name: 'Special Items',
    image: 'https://media.s-bol.com/R66Xzz9lB43q/550x366.jpg',
    price: ' $18.00',
    sale: true,
    originalPrice: '$20.00',
    original: true,
    reviews: true,
  },
  {
    name: 'Sale Items',
    image: 'https://img2.exportersindia.com/product_images/bc-full/2019/3/4085245/yellow-melamine-plastic-dinner-sets-1551780110-4768416.jpeg',
    price: '$25.00',
    sale: true,
    originalPrice: '',
    original: false,
    reviews: false,

  },
  {
    name: 'Popular Items',
    image: 'https://media.s-bol.com/3jnzNmXMzmZp/lOkN0y5/550x366.jpg',
    price: '$40.00',
    sale:false,
    originalPrice: "",
    original: false,
    reviews: true,
  },
  {
    name: 'Sale Items',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAImAZ5EnZOBHL0-_pb4t4tKv6pS4lp3KCIT1QY2Qf9VxjG0k2r5KuGzZOAvL4GkWEN5Y&usqp=CAU',
    price: ' $25.00',
    sale: true,
    originalPrice: '$50.00',
    original: true,
    reviews: false,
  },
  {
    name: 'Fancy Products',
    image: 'https://media.s-bol.com/3jnzNmXMzmZp/lOkN0y5/550x366.jpg',
    price: ' $120.00',
    sale: false,
    originalPrice: '$280.00',
    original: true,
    reviews: false,
  },
  {
    name: 'Special Items',
    image: 'https://media.s-bol.com/736gM65wvrmr/550x366.jpg',
    price: ' $18.00',
    sale: true,
    originalPrice: '$20.00',
    original: true,
    reviews: true,
  },
  {
    name: 'Special Items',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkPgGQyxaQWACjOX7MTUcbNDZKo1-HPwJIBO5zivA3LWlEh2yuQWsW5p1nwXksh9g2JE&usqp=CAU',
    price: ' $20.00',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: true,
  }]
  
  return <>
<TopBar cart={cart} setCart={setCart} />
<Header/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    datas.map((product,i)=>{
                      return <Card product={product} key={i} cart={cart} setCart={setCart}/>
                    
                    })
                   }

                    </div>
              </div>
</section>
<Footer cart={cart} setCart={setCart}/>              
  </>
}

export default App