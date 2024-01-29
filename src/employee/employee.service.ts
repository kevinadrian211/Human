import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const createdEmployee = await this.prisma.employee.create({
      data: createEmployeeDto,
    });
    return createdEmployee;
  }

  async getAllEmployees() {
    const employees = await this.prisma.employee.findMany();
    return employees;
  }

  async getEmployeeById(employeeId: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id: employeeId },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    return employee;
  }

  async updateEmployee(employeeId: number, updateEmployeeDto: UpdateEmployeeDto) {
    const updatedEmployee = await this.prisma.employee.update({
      where: { id: employeeId },
      data: updateEmployeeDto,
    });

    if (!updatedEmployee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    return updatedEmployee;
  }

  async patchEmployee(employeeId: number, updateEmployeeDto: UpdateEmployeeDto) {
    const patchedEmployee = await this.prisma.employee.update({
      where: { id: employeeId },
      data: updateEmployeeDto,
    });

    if (!patchedEmployee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    return patchedEmployee;
  }

  async deleteEmployee(employeeId: number) {
    const deletedEmployee = await this.prisma.employee.delete({
      where: { id: employeeId },
    });

    if (!deletedEmployee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    return deletedEmployee;
  }
}
