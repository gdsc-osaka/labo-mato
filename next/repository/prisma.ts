import {PrismaClient} from "@prisma/client";

// let isConnected = false;
//
// export const prisma = () => {
//     const prisma = new PrismaClient();
//     if (!isConnected) {
//         prisma.$connect();
//         isConnected = true;
//     }
//     return prisma;
// }

export const prisma = new PrismaClient();
