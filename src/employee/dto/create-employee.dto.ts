import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty({ example: 'Developer' })
  position: string;
}
