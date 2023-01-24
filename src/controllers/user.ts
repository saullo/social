import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

const create = async (req: Request, res: Response) => {
  return res.status(200).json();
};

const show = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

const update = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

const destroy = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

export default { index, create, show, update, destroy };
