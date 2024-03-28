import {prisma} from "@/repository/prisma";
import {Laboratory, RawLaboratory} from "@/domain/types";

type Query = {
    keyword?: string;
}

interface ILaboratoryRepository {
    findMany(query: Query): Promise<Laboratory[]>;
    create(laboratory: Omit<RawLaboratory, "id" | "createdAt" | "updatedAt">): Promise<RawLaboratory>;
}

export class LaboratoryRepository implements ILaboratoryRepository {
    async findMany(query: Query): Promise<Laboratory[]> {
        try {
            const results = await prisma.laboratory.findMany({
                where: {
                    name: {
                        contains: query.keyword
                    }
                },
                include: {
                    university: true,
                    discipline: true
                },
                // select: {
                //     id: true,
                //     name: true,
                //     course: true,
                //     major: true,
                //     paperSummary: true,
                //     prefectureId: true,
                //     updatedAt: true,
                //     university: {
                //         select: {
                //             name: true
                //         }
                //     },
                //     discipline: {
                //         select: {
                //             name: true,
                //             type: true,
                //         }
                //     },
                // },
            });

            return results;
        } catch (e) {
            console.error(e);
            return Promise.reject(e);
        }
    }

    async create(laboratory: Omit<RawLaboratory, "id" | "createdAt" | "updatedAt">) {
        try {
            return await prisma.laboratory.create({
                data: laboratory
            });
        } catch (e) {
            console.error(e);
            return Promise.reject(e);
        }
    }
}
