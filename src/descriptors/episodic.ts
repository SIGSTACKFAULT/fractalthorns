export type RecordEntry = {
    chapter: string,
    name: string,
    title: string,
    solved: boolean,
    iteration: string,
}
export type RedactableRecordEntry = Omit<RecordEntry, "name"> & {name?: string, title?: string}

export type Model = {
    records: Array<RecordEntry>,
};

export type ClientModel = Array<{name: string, records: Array<RedactableRecordEntry>}>;

export type FullEpisodicRequest = {}; 
export type SingleRecordRequest = {
    name: string,
};

export type SolveRecordRequest = {
    name: string,
};

export function get_iteration_sigil(iteration: string): string | undefined {
    switch (iteration) {
        case "154373": return "⎊";
        case "209151": return "◇";
        case "265404": return "△";
        case "768220": return "⧉";
        case "768221": return "⬡";
        case "auzoan": return "∂";
        case "event": return "⌘";
        case "0": return "∅";
    }
}

export function get_iteration_color(iteration: string): string | undefined {
    switch (iteration) {
        case "154373": return "#FFF8D1";
        case "209151": return "#00FFED";
        case "265404": return "#FFC67C";
        case "768220": return "#FF5588";
        case "768221": return "#E84CDB";
        case "auzoan": return "#E84CDB";
        case "event": return "#EA0042";
        case "0": return "#000000";
    }
}

// TODO maybe(?) this should be handled by the character API,
// but not having an API for this saves us net requests and honestly
// the character API may not be a thing anyone needs, so :shrug:
// Plus it's different than just a list of characters anyway
export const mnemonic_keywords = [
    "AURAK",
    "MEFET",
    "YANIS",
    "TARAN",
    "IGLAS",
    "WARES",
    "RIMAN",
    "NERAN",
    "COLUS",
    "CALEN",
    "CASEI",
    "ALUSE",
    "SETEI",
    "ERISS",
    "FEREI",
    "YARUS",
    "IWEML",
    "DESSA",
    "WEHAN",
    "FENAN",
    "TACEK",
    "ZEHAL",
    "VETTE",
    "KIRII",
    "METIS",
    "LOTUS",
    "RUTHA",
    "MELLI",
    "AEMIL",
    "SILLH",
    "LOXXE",
    "DZUNE",
    "DZANE",
    "MAEIN",
    "KIEAZ",
    "KALLI",
    "KRYTA",
    "EVJAR",
    "ROMAL",
    "JAELA",
    "TIMUR",
    "NIMEA",
    "KEZSE",
    "ARILI",
    "AERIS",
    "MALDA",
    "KHYEL",
    "HESSE",
    "HEKAE",
    "TIZAJ",
    "MIKIL",
    "VESES",
    "KIERA",
    "NDEJA",
    "KARUS",
    "VANJE",
    "HAGAZ",
    "SENNA",
    "ELLAI",
    "MEAZS",
    "JAKAL",
    "MEDZA",
    "REAME",
    "KAELI",
    "LLEMA",
    "TEKAL",
    "RIMII",
    "TEZEL",
    "KAVUK",
    "SELTE",
    "LEZSE",
    "KAEZA",
    "SHAEL",
    "JERGH",
    "VAEJA",
    "IOGOS",
    "NETRE",
    "NIMDA",
    "CYXYM",
    "OEREC",
    "VITAS",
    "RIGEL",
    "RHOMB",
    "NYXEM",
    "ZELUN",
    "HALEN",
    "NITAS",
    "VERCE",
    "VERDE",
    "VIBRA",
    "VERTI",
    "ZSUNG",
    "GIMEL",
    "KRAZA",
    "DEJIL",
    "EMBER",
    "BEAST",
    "SIGIL",
    "FLOAT",
    "QUARK",
    "PLUTO",
    "PEARL",
    "OCHRE",
    "EYKWYRM",
    "VOLLUX",
    "LLOKIN",
    "CHEVRIN",
    "NYXITE",
    "COVALUS",
    "OSMITE",
    "BEMITE",
    "MEADOW",
    "AETOL",
    "KELASH",
    "NGATAJ",
    "GOAXAL",
    "ENM",
    "SILVER"
];