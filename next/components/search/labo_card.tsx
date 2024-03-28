import {Laboratory} from "@/domain/types";

export const LaboCard = ({labo}: {labo: Laboratory}) => {
    return (
        <article className={'border border-material-outline rounded bg-card p-4 ' +
            'flex flex-col'}>
            <p className={'text-lg'}>{labo.name}</p>
            <p>{labo.university.name + " " + labo.course}</p>
            <p>{labo.major}</p>
            <div className={'flex flex-row justify-end'}>
                <button>

                </button>
            </div>
        </article>
    )
}
