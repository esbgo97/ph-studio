import {
  Box,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import AlbumTumbnail from "../../components/AlbumTumbnail";

export default function Bodas() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <Box
          style={{ backgroundColor: "lightcyan", width: 700, height: 700 }}
          margin={15}
        >
          <Text> LOREM</Text>
        </Box>
        <Text>
          En un instante eterno donde dos almas se funden en amor, se crean
          promesas infinitas y recuerdos imborrables.
        </Text>
      </GridItem>
      <GridItem textAlign="center">
        <Text fontSize="4xl"> Personas que confiaron en nosotros</Text>
        <Box margin={2}>
          <Grid templateColumns="repeat(3, 2fr)" gap={5}>
            <AlbumTumbnail name="Heiber y Elizabeth " />
            <AlbumTumbnail name="Uno y Dos " />
            <AlbumTumbnail name="Tres Y Cuatro " />
            <AlbumTumbnail name="Cinco y Seis " />
            <AlbumTumbnail name="Siete y Ocho " />
            <AlbumTumbnail name="Nueve y Diez " />
            <AlbumTumbnail name="Once y Doce " />
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
}
