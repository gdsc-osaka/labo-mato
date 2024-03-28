'use client'
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {prefUtils} from "@/lib/prefecture_utils";

export default function SelectRegion({name, defaultValue}: {
    name: string,
    defaultValue?: string
}) {
    return (
        <div>
            <Label htmlFor={"region-search"}>地方名で検索</Label>
            <Select name={name} defaultValue={defaultValue}>
                <SelectTrigger className="">
                    <SelectValue placeholder="地方名で検索" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {prefUtils.getAllRegions().map(region => (
                            <SelectItem key={region.id} value={region.id.toString()}>{region.name}地方</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
