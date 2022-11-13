import ContextWrapper from "context/ContextProvider";
import { GlobalStyle } from "global/GlobalStyle";
import SideBar from "components/layout/SideBar/SideBar";
import { StyledWrapper } from "./styles";

interface Iprops {
  children: React.ReactNode;
}



const Wrapper = ({ children }: Iprops) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <ContextWrapper>
        <SideBar />
        {children}
      </ContextWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
