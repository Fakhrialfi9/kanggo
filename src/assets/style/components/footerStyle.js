import { styled } from "@vue-styled-components/core";

export const Footer = styled.footer`
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
  margin: 0 auto;
  padding: 0;
  background-color: var(--background-color-transparent-0);
  border-top: 0.085rem solid var(--diver-color-solid-0);
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const CopyRight = styled.h5`
  font-size: 0.85rem !important;
  font-weight: 300 !important;
`;
