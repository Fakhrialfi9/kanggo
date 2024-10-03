import { styled } from "@vue-styled-components/core";

export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100%;
  min-height: 100dvh;
  max-height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  padding: 7.5rem 0;
`;

export const WrapCardProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  flex-wrap: wrap;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 1rem;
  background-color: var(--background-color-solid-0);
  border: 0.1rem solid var(--diver-color-solid-0);
  border-radius: var(--border-radius-xl);
  transition: all 0.5s ease;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    background-color: var(--background-color-solid-50);
    -webkit-box-shadow: 10px 10px 43px 5px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 10px 10px 43px 5px rgba(0, 0, 0, 0.11);
    box-shadow: 10px 10px 43px 5px rgba(0, 0, 0, 0.11);
  }
`;

export const CardImageProduct = styled.figure`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  border-radius: var(--border-radius-lg);
  overflow: hidden !important;
`;

export const ImageProduct = styled.img`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center;
`;

export const CardInformationProduct = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;
`;

export const CardTitleProduct = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const CardDescriptionProduct = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const CardButtonCallToActionProduct = styled.div`
  box-sizing: border-box;
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
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;
`;

export const EditProductButton = styled.button`
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

export const DeleteProductButton = styled.button`
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
