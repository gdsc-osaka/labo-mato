import {z} from 'zod'
import {LaboCard} from "@/components/search/labo_card";
import {Laboratory, University} from "@/domain/types";

type SearchParams = {
    q: string
}

const laboratoryDecoder = z.custom<Laboratory>();
const laboratoriesDecoder = z.array(laboratoryDecoder);

const searchLaboratories = async (searchParams: SearchParams): Promise<Laboratory[]> => {
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
        return laboratoriesDecoder.parse(json);
    } catch (e) {
        console.error(e);
        return [];
    }
}


export default async function SearchPage({searchParams}: {searchParams: SearchParams}) {
    const labos = await searchLaboratories(searchParams);

    return (
        <main className={'px-12 py-6'}>
            <div className={'grid grid-cols-4 gap-4'}>
                {labos.map(labo => <LaboCard key={labo.id} labo={labo}/>)}
            </div>
        </main>
    );
}
