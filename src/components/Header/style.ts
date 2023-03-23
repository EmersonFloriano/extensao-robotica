import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
  fixed 
  w-full
  max-w-6xl 
  h-16 
  z-30 
  mx-auto 
  px-5
  
  flex 
  items-center
  justify-between

  md:bg-opacity-90
  md:h-20
  sm:px-6

  transition 
  duration-300
  ease-in-out
`;

export const LogoContainer = tw.div`
  flex-shrink-0 
  mr-4
`;

export const Logo = tw.img`
  h-20
  object-contain
  border    
`;

export const Navcontainer = tw.nav`
  flex 
  flex-grow
`;

export const NavList = tw.ul`
  flex 
  flex-grow 
  flex-wrap 
  justify-end 
  items-center
`;
