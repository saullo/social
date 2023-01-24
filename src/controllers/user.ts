import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  return res.status(200).json({ data: { name, email, password } });
};

export default { create };
