import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model"
export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Lazer", description: "Cinema, parques, praia, etc"},
      { id: 2, name: "Moradia", description: "Pagamento de contas de casa"},
      { id: 3, name: "Saúde", description: "Plano de saúde e Remédios"},
      { id: 4, name: "Salário", description: "Recebimento de Salário"},
      { id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
    ];

    return { categories }
  }
}
