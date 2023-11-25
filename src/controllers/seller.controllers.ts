import { Request, Response } from "express";
import * as s from "../services/seller";

export const getAllSellersDataController = async (
  req: Request,
  res: Response
) => {
  const sellers = await s.getAllSellersDataService();
  return res.status(200).json(sellers);
};

export const getSellerDataByIdController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const seller = await s.getSellerDataByIdService(id);
  return res.status(200).json(seller);
};

export const registerSellerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const newSeller = await s.registerSellerService(data);
  return res.status(201).json(newSeller);
};

export const loginSellerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const accessToken = await s.loginSellerService(data);
  return res.status(200).json(accessToken);
};

export const getSellerDataController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const sellerData = await s.getSellerDataByIdService(id);
  return res.status(200).json(sellerData);
};

export const updateSellerController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = req.body;
  const updatedData = await s.updateSellerService(id, data);
  return res.status(200).json(updatedData);
};

export const savePhotosController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const photos = req.files as Express.Multer.File[];

  const savedPhotos = await s.savePhotosService(id, photos);
  return res.status(200).json(savedPhotos);
};

export const addAvatarPhotoController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const file = req.file as Express.Multer.File;
  const seller = await s.addAvatarPhotoService(id, file);

  return res.status(200).json(seller);
};
