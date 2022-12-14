import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create: ({ description, name }: ICreateCategoryDTO) => void;
  findByName: (name: string) => Category;
  list: () => Category[];
}
