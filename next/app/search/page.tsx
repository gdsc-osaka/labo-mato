import {array, Decoder, number, object, string} from "@mojotech/json-type-validation";
import {Laboratory} from "@prisma/client";
import {LaboCard} from "@/components/laboratory";

type SearchParams = {
    q: string
}

const laboratoryDecoder: Decoder<Laboratory> = object({
    id: string(),
    univId: number(),
    disciplineId: number(),
    name: string(),
    course: string(),
    major: string(),
    websiteUrl: string(),
    email: string(),
    telNumber: string(),
    paperSummary: string(),
    prefectureId: number(),
    createdAt: number().map((x) => new Date(x)),
    updatedAt: number().map((x) => new Date(x)),
});
const laboratoriesDecoder: Decoder<Laboratory[]> = array(laboratoryDecoder);

const searchLabos = async (searchParams: SearchParams): Promise<Laboratory[]> => {
    const params = new URLSearchParams(searchParams);
    const res = await fetch(process.env.URL + `/api/labos?${params.toString()}`, {
        method: 'GET',
        next: { revalidate: 10 },
    });
    if (!res.ok) {
        return [];
    }
    const json = await res.json();

    try {
        return laboratoriesDecoder.runPromise(json);
    } catch (e) {
        console.error(e);
        return [];
    }
}


export default async function SearchPage({searchParams}: {searchParams: SearchParams}) {
    const {q} = searchParams;

    const labos = await searchLabos(searchParams);

    return (
        <main className={'p-12'}>
            {labos.map(labo => <LaboCard labo={labo}/>)}
        </main>
    );
}
