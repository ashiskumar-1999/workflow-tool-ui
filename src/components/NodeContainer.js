import React from "react"
import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  addEdge,
} from "react-flow-renderer"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

const initialElements = [
  {
    id: 1,
    type: "input",
    data: { label: "Email" },
    position: { x: 100, y: 100 },
  },
]

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitview()
}

function Nodecomponent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [elements, Setelements] = React.useState(initialElements)
  const [name, SetName] = React.useState()
  const btnRef = React.useRef()

  const handlechange = () => {
    Setelements((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { label: `${name}` },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      })
    )
  }

  const onConnect = (params) => {
    Setelements((e) => addEdge(params, e))
  }
  return (
    <>
      <ReactFlow
        elements={elements}
        style={{ width: "80%", height: "600px" }}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
        connectionLineType="bezier"
        snapToGrid={true}
        snapGrid={[16, 16]}
      >
        <Background variant="dots" gap={12} size={1} />
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "input") return "blue"
            return "#FFCC00"
          }}
        />
        <Controls />
      </ReactFlow>
      <Box>
        <Box mx="100px" my="30px">
          <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
            Create a Node
          </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your Node</DrawerHeader>
            <DrawerBody>
              <FormControl isRequired>
                <FormLabel>Name of the Node</FormLabel>
                <Input type="text" onChange={(e) => SetName(e.target.value)} />
              </FormControl>
            </DrawerBody>
            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>  */}
              <Button colorScheme="blue" onClick={handlechange}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Nodecomponent
