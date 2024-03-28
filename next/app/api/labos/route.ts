import {NextRequest, NextResponse} from "next/server";
import {LaboratoryRepository} from "@/repository/laboratoryRepository";

const laboratoryRepository = new LaboratoryRepository();

export async function GET(request: NextRequest): Promise<NextResponse> {
    const params = request.nextUrl.searchParams;
    const keyword = params.get("q") ?? '';
    const results = await laboratoryRepository.findMany({keyword});

    return NextResponse.json(results);
}
