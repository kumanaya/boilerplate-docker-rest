import { Request, Response } from "express";
import os from "os";

class InitialController {
  async handle(request: Request, response: Response) {
    return response.json({
      message: "Server is running ;)",
      hostname: os.hostname(),
    });
  }
}

export default InitialController;
