import { styled } from "@vue-styled-components/core";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 90%;
  min-width: auto;
  max-width: 90%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  -webkit-text-size-adjust: 100%;

  @media (max-width: 576px) {
    width: 90% !important;
    max-width: 576px !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 90% !important;
    max-width: 768px !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90% !important;
    max-width: 991px !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 90% !important;
    max-width: 1200px !important;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 90% !important;
    max-width: 1400px !important;
  }

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 90% !important;
    max-width: 1600px !important;
  }
`;
