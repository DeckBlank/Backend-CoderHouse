import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).send("ENVIAR TODOS LOS PRODUCTOS");
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`ENVIAR EL PRODUCTO CON ID ${id}`);
};

export const createProduct = async (req: Request, res: Response) => {};

export const updateProduct = async (req: Request, res: Response) => {};

export const deleteProduct = async (req: Request, res: Response) => {};
