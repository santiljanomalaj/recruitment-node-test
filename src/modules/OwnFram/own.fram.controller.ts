import { NextFunction, Request, Response } from "express";
import { OwnframService } from "./own.fram.service";
import { CreateOwnFramDto } from "./dto/create-own-fram.dto";
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { OwnFram } from "./entities/ownfrma.entity";
@Controller()
export class OwnFramController {
  private readonly ownframService: OwnframService;

  constructor() {
    this.ownframService = new OwnframService();
  }
  @Post()
  public async createOwnFram(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.ownframService.createOwn(req.body as CreateOwnFramDto);
      return res.status(201).send({ data });
    } catch (error) {
      next(error);
    }
  }
  @Get(":id")
  public async getById(id: number, res: Response, next: NextFunction) {
    try {
      const data = await this.ownframService.getById(id);
      return res.status(200).send({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  @Get(":id")
  public async deleteOwn(id: number, res: Response, next: NextFunction) {
    try {
      const data = await this.ownframService.delete(id);
      return res.status(200).send({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  public async GetAll(res: Response, next: NextFunction) {
    try {
      const list = await this.ownframService.getAll();
      return res.status(200).send({ data: list });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async update(@Param("id", ParseIntPipe) id: number, @Body() ownData: CreateOwnFramDto): Promise<OwnFram> {
    return this.ownframService.update(id, ownData);
  }
}
