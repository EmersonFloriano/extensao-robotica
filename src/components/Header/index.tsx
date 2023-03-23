import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Navcontainer,
  NavList,
} from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <Navcontainer>
        <NavList>
          <li>
            <Link
              to="/signin"
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
            >
              <span>Sign up</span>
            </Link>
          </li>
        </NavList>
      </Navcontainer>
    </HeaderContainer>
  );
}
