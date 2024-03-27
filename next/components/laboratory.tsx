import {Laboratory} from "@prisma/client";

export const LaboCard = ({labo}: {labo: Laboratory}) => {
    return (
        <article className={'border border-material-outline rounded bg-card m-2' +
            'flex flex-column'}>
            <p>{labo.name}</p>
            <p>{labo.univId}</p>
        </article>
    )
}
