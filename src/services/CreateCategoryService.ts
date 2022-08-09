import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAllreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAllreadyExists) {
      throw new Error("Categorie allready exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
