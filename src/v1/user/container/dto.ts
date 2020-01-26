import {
  MaxLength,
  Length,
  IsOptional,
  IsUUID,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(10, 10)
  readonly phone?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(10, 10)
  readonly phone?: string;
}

export class ParamDTO {
  @IsUUID()
  id: string;
}
