import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  background: #337419;
`;

const Entry = styled.a`
  padding: 12px 20px;
  color: white;
`;

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <Container>
      <Entry href="#">Home</Entry>
      <Entry href="/twitch">Twitch Followed Channels</Entry>
    </Container>
  );
};

Header.displayName = "Header";

export default Header;

export interface HeaderProps {}
