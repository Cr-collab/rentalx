import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAllreadyExists = categoriesRepository.findByName(name);

  if(categoryAllreadyExists){
    return response.status(400).json({error: "Categorie allready exists"})
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});
