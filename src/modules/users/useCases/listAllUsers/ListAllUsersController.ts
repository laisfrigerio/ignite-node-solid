import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http2";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders {
  user_id: string;
}

type IncomingCustomHeaders = IncomingHttpHeaders & IHeaders;

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as IncomingCustomHeaders;

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
