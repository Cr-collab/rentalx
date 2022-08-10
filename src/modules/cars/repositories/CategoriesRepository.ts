import { Category } from "../model/Category";
import {
  ICreateCategoryDTO,
  ICategoriesRepository
} from "./ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    let category = this.categories.find((categorie) => categorie.name === name);

    return category;
  }
}
