'use client';

import {Input} from "@/components/ui/input";
import {FormEvent} from "react";
import {useRouter} from "next/navigation";

export const SearchBox = () => {
    const router = useRouter();

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const {keyword} = {
            keyword: formData.get('keyword')
        };

        if (keyword === null || keyword instanceof File || keyword === '') return;

        const params = new URLSearchParams();
        params.set('q', keyword);

        router.push(`/search?${params.toString()}`)
    }

    return (
        <form onSubmit={handleSearch}>
            <Input inputMode={'search'} name={'keyword'}/>
            <button type={'submit'}>検索</button>
        </form>
    )
}
