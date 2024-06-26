import { Box, Heading, Text, Card, CardBody, Divider, Center, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (

        <Center height="100vh">
            <Box width="600px"  padding="20" boxShadow="md" borderRadius="md">
         <Card maxW='md' >
               <CardBody >
                 <Image
                            src='../../paymentsuccess.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading textAlign="center" textTransform="uppercase" size='md'>payment Successful</Heading>
                            <Text textAlign="center">
                               Payment ID: {referenceNum}
                            </Text>

                        </Stack>
                    </CardBody>
                    <Divider />

                </Card>
            </Box>
        </Center>



    )
}

export default PaymentSuccess