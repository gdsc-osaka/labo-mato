const prefIdToName = new Map<number, string>([
    [1, "北海道"],
    [2, "青森県"],
    [3, "岩手県"],
    [4, "宮城県"],
    [5, "秋田県"],
    [6, "山形県"],
    [7, "福島県"],
    [8, "茨城県"],
    [9, "栃木県"],
    [10, "群馬県"],
    [11, "埼玉県"],
    [12, "千葉県"],
    [13, "東京都"],
    [14, "神奈川県"],
    [15, "新潟県"],
    [16, "富山県"],
    [17, "石川県"],
    [18, "福井県"],
    [19, "山梨県"],
    [20, "長野県"],
    [21, "岐阜県"],
    [22, "静岡県"],
    [23, "愛知県"],
    [24, "三重県"],
    [25, "滋賀県"],
    [26, "京都府"],
    [27, "大阪府"],
    [28, "兵庫県"],
    [29, "奈良県"],
    [30, "和歌山県"],
    [31, "鳥取県"],
    [32, "島根県"],
    [33, "岡山県"],
    [34, "広島県"],
    [35, "山口県"],
    [36, "徳島県"],
    [37, "香川県"],
    [38, "愛媛県"],
    [39, "高知県"],
    [40, "福岡県"],
    [41, "佐賀県"],
    [42, "長崎県"],
    [43, "熊本県"],
    [44, "大分県"],
    [45, "宮崎県"],
    [46, "鹿児島県"],
    [47, "沖縄県"],
]);

const regionIdToName = new Map<number, string>([
    [1, "北海道"],
    [2, "東北"],
    [3, "関東"],
    [4, "中部"],
    [5, "近畿"],
    [6, "中国"],
    [7, "四国"],
    [8, "九州・沖縄"],
]);

const regionIdToPrefIdRange = new Map<number, Range>([
    [1, {from: 1, to: 1}],
    [2, {from: 2, to: 7}],
    [3, {from: 8, to: 14}],
    [4, {from: 15, to: 23}],
    [5, {from: 24, to: 30}],
    [6, {from: 31, to: 35}],
    [7, {from: 36, to: 39}],
    [8, {from: 40, to: 47}],
])

type Entity = {
    id: number,
    name: string,
}

type Range = {
    from: number,
    to: number,
}

class PrefectureUtils {
    getAllPrefs(): Entity[] {
        return Array.from(prefIdToName.entries()).map(e => ({id: e[0], name: e[1]}));
    }

    getAllRegions(): Entity[] {
        return Array.from(regionIdToName.entries()).map(e => ({id: e[0], name: e[1]}))
    }

    getPrefIdRangeByRegion(regionId: number): Range | null {
        if (!regionIdToPrefIdRange.has(regionId)) return null;
        return regionIdToPrefIdRange.get(regionId)!;
    }

    getPrefsByRegion(regionId: number): Entity[] {
        const prefs = new Array<Entity>();
        const range = this.getPrefIdRangeByRegion(regionId);
        if (range === null) return [];

        for (let i = range.from; i <= range.to; i++) {
            prefs.push({id: i, name: prefIdToName.get(i)!});
        }

        return prefs;
    }
}

export const prefUtils = new PrefectureUtils();
