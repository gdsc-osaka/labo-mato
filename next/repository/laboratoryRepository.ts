import {prisma} from "@/repository/prisma";
import {Laboratory, RawLaboratory} from "@/domain/types";

type Query = {
    keyword?: string;
    prefectureIds?: number[];
    disciplineIds?: number[];
}

interface ILaboratoryRepository {
    findMany(query: Query): Promise<Laboratory[]>;
    create(laboratory: Omit<RawLaboratory, "id" | "createdAt" | "updatedAt">): Promise<RawLaboratory>;
}

export class LaboratoryRepository implements ILaboratoryRepository {
    async findMany(query: Query): Promise<Laboratory[]> {
        try {
            return await prisma.laboratory.findMany({
                where: {
                    name: {
                        contains: query.keyword
                    },
                    prefectureId: {
                        in: query.prefectureIds
                    },
                    disciplineId: {
                        in: query.disciplineIds
                    }
                },
                include: {
                    university: true,
                    discipline: true
                },
            });
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
