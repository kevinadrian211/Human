import { Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') employeeId: string) {
    return this.employeeService.getEmployeeById(+employeeId);
  }

  @Put(':id')
  updateEmployee(@Param('id') employeeId: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(+employeeId, updateEmployeeDto);
  }

  @Patch(':id')
  patchEmployee(@Param('id') employeeId: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.patchEmployee(+employeeId, updateEmployeeDto);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') employeeId: string) {
    return this.employeeService.deleteEmployee(+employeeId);
  }
}
