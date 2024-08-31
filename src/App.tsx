import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
        "aside"
        "main"
        "nav"
        `,
          lg: `
        "nav nav"
        "aside main"
        `,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
        <GridItem area="aside">
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
