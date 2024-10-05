import { styled } from "@vue-styled-components/core";

export const Modals = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 25rem;
  min-width: 25rem;
  max-width: 25rem;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--background-color-solid-0);
  border: 0.085rem solid var(--diver-color-solid-0);
  border-radius: var(--border-radius-md);
  -webkit-box-shadow: 0px 0px 65px -27px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 65px -27px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 65px -27px rgba(0, 0, 0, 1);
`;

export const DiaglogModals = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 1rem;
  gap: 1rem;
`;

export const HeaderDiaglogModals = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;
`;

export const TitleDiaglogModals = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SubheadlineDiaglogModals = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
`;

export const FormEditModalsProduct = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
`;

export const InputEditModalsProduct = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif !important;
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
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  border: 0.085rem solid var(--diver-color-solid-500);
`;

export const InputDescriptionEditModalsProduct = styled.textarea`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 5rem;
  min-height: 5rem;
  max-height: 5rem;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  border: 0.085rem solid var(--diver-color-solid-500);
`;

export const CallToActionDiaglogModals = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
`;

export const CancelProductButton = styled.button`
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

export const SaveAddProductButton = styled.button`
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
