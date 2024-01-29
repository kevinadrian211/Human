import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Seed Employees
  const employee1 = await prisma.employee.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Developer',
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      position: 'Designer',
    },
  });

  // Seed LeaveRequests
  await prisma.leaveRequest.createMany({
    data: [
      {
        employeeId: employee1.id,
        reason: 'Vacation',
        status: 'Approved',
      },
      {
        employeeId: employee2.id,
        reason: 'Sick Leave',
        status: 'Pending',
      },
    ],
  });

  // Seed Resources
  const resource1 = await prisma.resource.create({
    data: {
      title: 'Projector',
      description: 'High-quality projector for presentations',
      lastSee: 'Meeting Room A',
    },
  });

  const resource2 = await prisma.resource.create({
    data: {
      title: 'Laptop',
      description: 'Powerful laptop for development tasks',
      lastSee: 'John Doe',
    },
  });

  console.log('Seed data inserted successfully');
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
