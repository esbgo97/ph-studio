import { GridItem, Text } from "@chakra-ui/react";

export default function AlbumTumbnail(props) {
  const { name } = props;
  return (
    <GridItem >
      <div
        style={{ backgroundColor: "lightcyan", width: 250, height: 250 }}
      ></div>
      <Text>{name}</Text>
    </GridItem>
  );
}
