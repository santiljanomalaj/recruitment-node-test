import { Repository } from "typeorm";
import { CreateOwnFramDto } from "./dto/create-own-fram.dto";
import { OwnFram } from "./entities/ownfrma.entity";
import dataSource from "orm/orm.config";
import { HttpException, HttpStatus } from "@nestjs/common";

export class OwnframService {
  private readonly ownFramRepository: Repository<OwnFram>;

  constructor() {
    this.ownFramRepository = dataSource.getRepository(OwnFram);
  }

  public async createOwn(data: CreateOwnFramDto): Promise<OwnFram> {
    const createOwnFram = await this.ownFramRepository.create(data);
    const dataSave = await this.ownFramRepository.save(createOwnFram);
    return dataSave;
  }

  public async getById(id: number): Promise<OwnFram> {
    return (await this.ownFramRepository.findOneBy(id as any)) as any;
  }

  public async delete(id: number): Promise<number> {
    let not_found_id = (await this.ownFramRepository.findOneBy(id as any)) as any;
    if (!not_found_id) {
      throw new HttpException(`id ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return (await this.ownFramRepository.delete(id as any)) as any;
  }

  async getAll(): Promise<OwnFram[]> {
    return await this.ownFramRepository.find();
  }

  async update(id: number, ownDataAdd: CreateOwnFramDto): Promise<OwnFram> {
    let ownData = (await this.ownFramRepository.findOneBy(id as any)) as any;

    if (!ownData) {
      throw new HttpException(`ownData with id ${id} not found.`, HttpStatus.NOT_FOUND);
    }

    ownData = { ...ownData, ...ownDataAdd };
    return await this.ownFramRepository.save(ownData);
  }
}
