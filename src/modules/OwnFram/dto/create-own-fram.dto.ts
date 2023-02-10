import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateOwnFramDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public size: string;

  @IsString()
  @IsNotEmpty()
  public yield_data: string;

  @IsString()
  @IsNotEmpty()
  public driving_distacne: string;
}
export class OwnFramLisrt {
  id: String;

  name: String;

  address: String;

  email: String;

  size: String;

  yield_data: String;

  driving_distacne: String;
}
