import styled from "styled-components";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
  IconSearch,
} from "../assets";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.header`
  padding: 25px 150px;
  display: flex;
  align-items: "center";
  justify-content: space-between;
`;

const List = styled.div`
  display: flex;
  align-items: center;
`;

type PropListItem = {
  mr?: number;
};
const ListItem = styled.div<PropListItem>`
  margin-right: ${({ mr }) => mr && mr + "px"};
`;

export default function Home() {
  return (
    <Header>
      <List>
        <ListItem mr={40}>
          <IconFacebook />
        </ListItem>
        <ListItem mr={40}>
          <IconInstagram />
        </ListItem>
        <ListItem mr={40}>
          <IconTwitter />
        </ListItem>
        <ListItem>
          <IconYoutube />
        </ListItem>
      </List>
      <List>
        <ListItem mr={40}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          error similique alias ut ratione corrupti tempore debitis esse omnis
          maiores facere eius, laborum ullam a dolor, corporis rerum commodi
          doloribus nam beatae. Incidunt culpa placeat commodi quae corrupti ea
          laudantium maiores. Laboriosam illo qui eveniet aut molestiae ut quam
          adipisci.
        </ListItem>
        <IconSearch />
      </List>
    </Header>
  );
}
