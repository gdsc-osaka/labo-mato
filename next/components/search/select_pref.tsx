'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {prefUtils} from "@/lib/prefecture_utils";
import {Label} from "@/components/ui/label";
import React from "react";

export default function SelectPrefecture({name, defaultValue}: {
    name: string
    defaultValue?: string
}) {
    return (
        <div>
            <Label htmlFor={"pref-search"}>都道府県で検索</Label>
            <Select name={name} defaultValue={defaultValue}>
                <SelectTrigger className="">
                    <SelectValue placeholder="都道府県で検索" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {prefUtils.getAllRegions().map(region => (
                            <React.Fragment key={region.id}>
                                <SelectLabel>{region.name}</SelectLabel>
                                {prefUtils.getPrefsByRegion(region.id).map(pref => (
                                    <SelectItem key={pref.id} value={pref.id.toString()}>{pref.name}</SelectItem>
                                ))}
                            </React.Fragment>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
