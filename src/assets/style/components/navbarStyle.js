import { styled } from "@vue-styled-components/core";
import { RouterLink } from "vue-router";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 2.5rem;
  max-height: auto;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  margin: 0 auto;
  padding: 0;
  background-color: var(--background-color-solid-0);
  border-bottom: 0.085rem solid var(--diver-color-solid-0);
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: auto;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  gap: 3.5rem;
`;

export const LeftContent = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;
  margin: 0;
  padding: 0;
`;

export const BoxLogoImage = styled.figure`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin: 0;
  padding: 0;
`;

export const LogoImage = styled.img`
  width: 7rem;
  min-width: 7rem;
  max-width: 7rem;
  height: auto;
  min-height: auto;
  max-height: auto;
`;

export const CenterContent = styled.section`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

export const CenterContentMenu = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: auto;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
`;

export const CenterContentItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const CenterContentLinkItem = styled(RouterLink)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  transition: all 0.25s ease;
  border-radius: var(--border-radius);
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  color: var(--text-color-solid-0) !important;
  text-decoration: none !important;

  &:hover {
    background-color: var(--background-color-solid-100);
  }

  &.active {
    background-color: var(--background-color-solid-100) !important;
  }

  &.exact-active {
    background-color: var(--background-color-solid-100) !important;
  }
`;

export const RightContent = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-end;
  align-items: center;
  margin-right: auto;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
`;

export const AddProductButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  border-radius: var(--border-radius-md);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
  gap: 0.25rem;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

export const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: var(--danger-color);
  border-radius: var(--border-radius-md);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
  gap: 0.25rem;

  &:hover {
    background-color: var(--danger-color-dark);
  }
`;
