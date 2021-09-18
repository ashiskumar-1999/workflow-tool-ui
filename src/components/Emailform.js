import React from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"

const Emailform = () => {
  return (
    <Box>
      <form>
        <FormControl id="email" isRequired>
          <FormLabel>To</FormLabel>
          <Input type="email" placeholder="EmailId" />
          <FormLabel>From</FormLabel>
          <Input type="email" placeholder="EmailId" />
          <FormLabel>Subject</FormLabel>
          <Input type="text" />

          <Textarea placeholder="Compose your Email" />
        </FormControl>
      </form>
      <Box my="10px">
        <Button size="lg" colorScheme="teal">
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default Emailform
