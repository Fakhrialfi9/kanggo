//mdelsShemaState.ts
import { ModelsSchemaProduct } from "./modelSchemaProduct";

export interface State {
  products: ModelsSchemaProduct[];
  isLoading: boolean;
  productToEdit: ModelsSchemaProduct | null;
  productToDelete: number | null;
  modalDeleteMessage: string;
  modalUpdateMessage: string;
  isDeleteModalOpen: boolean;
  isEditModalOpen: boolean;
  searchQuery: string;
  isModalVisible: boolean;
  modalAddProductMessage: string;
}
