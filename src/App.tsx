import { Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"

function App() {
  
  return (
    <>
     <Grid templateAreas={
      {
        base: `
        "aside"
        "main"
        "nav"
        `,
        lg: `
        "nav nav"
        "aside main"
        `
      }
     }>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem bg="coral" area="main">main</GridItem>
    <GridItem bg="gold " area="aside">aside</GridItem>
     </Grid>
    </>
  )
}

export default App
