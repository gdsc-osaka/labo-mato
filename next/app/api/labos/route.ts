import {NextRequest, NextResponse} from "next/server";
import {Laboratory} from "@prisma/client";

export function GET(request: NextRequest): NextResponse {
    const params = request.nextUrl.searchParams;
    const query = params.get("q") ?? '';
    const results: Laboratory[] = [{
        id: 'testId',
        univId: 0,
        disciplineId: 0,
        name: 'テスト大学',
        course: 'テスト学科',
        major: 'テスト専攻',
        websiteUrl: 'https://test.com',
        email: 'test@example.com',
        telNumber: '00-0000-0000',
        paperSummary: 'foobar',
        prefectureId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    }];

    return NextResponse.json(results.map(l => ({
        ...l,
        createdAt: l.createdAt.getTime(),
        updatedAt: l.updatedAt.getTime()
    })));
}
