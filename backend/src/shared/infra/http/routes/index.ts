import { Request, Response, Router } from "express";


const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.send("OLÁ DEVS");
})


export { router }