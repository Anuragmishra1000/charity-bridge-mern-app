import { useState } from 'react'
import { Box, Center, Stack, Flex } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";
import Intro from './Intro';
import NavBar from './Navbar';


const Home = () => {
    const [message, setMessage] = useState('')

    const checkoutHandler = async (amount) => {
        try {
            const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")
            const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount })

            var options = {
                key: key,
                amount: order.amount,
                currency: "INR",
                name: "Charity Bridge",
                description: "Donation Bank",
                image: "https://avatars.githubusercontent.com/u/112774160?s=400&u=5ca083c132fd83f963f8fa6dc2a188db27f532d9&v=4",
                order_id: order.id,
                callback_url: "http://localhost:4000/api/paymentverification",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();


        } catch (error) {
            console.log(error)
        }

    }

    return (
      
                <Flex
                    direction={{ base: 'column', md: 'row' }
                    } // Stack cards vertically on small screens, side by side on medium and larger screens
                    justify="center" // Center content horizontally
                    align="center" // Center content vertically
                    p={4} // Padding around the Flex container
                >
                    <Intro img={"https://lokmitra.org.in/wp-content/uploads/2015/02/Girl-from-Harchandpur-by-Monica-2010.jpg"} />

                    <Card img={"https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg"} checkoutHandler={checkoutHandler} />

                </Flex >

          
        
    )
}

export default Home