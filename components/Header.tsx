"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2vh;
  padding: 2vh;
  padding-top: 4vh;

`;

const StyledH1 = styled.h1`
  padding: 1vh;
  color: #088F8F;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 3vh;
`;

const StyledLink = styled(Link)`
  padding: 2vh;
  text-decoration: none;
  font-size: 3vh;
  color: #088F8F;
  &:hover {
    text-decoration: underline;
  }
  
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Random Cat Image Generator</StyledH1>
      <StyledNav>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/about">About</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}
