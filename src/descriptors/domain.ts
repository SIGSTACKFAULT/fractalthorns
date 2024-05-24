export const domains = [
    "image",
    "episodic",
    "home",
    "subproject",
] as const;

export type Page =
    | {domain: "image", name?: string}
    | {domain: "episodic", record_name?: string, line_id?: string}
    | {domain: "home"}
    | {domain: "subproject", name?: string}


export function is_valid_domain(name?: string): name is Page["domain"] {
    if (!name) {
        return false;
    }

    const is_valid = domains.includes(name as Page["domain"]);
    return is_valid;
}

export function page_to_path(page: Page) {
    const item_suffix = (() => {
        switch (page.domain) {
            case "image": return page.name;
            case "episodic": return `${page.record_name ?? ""}/${page.line_id ?? ""}`;
            case "home": return;
            case "subproject": return page.name;
        }
    })();

    const path = `/${page.domain}/${item_suffix ?? ""}`;
    return path;
}

export function path_to_page(path: string): Page {
    const path_parts = path.split("/").filter(part => part.length > 0);
    const domain = path_parts[0];

    const page = (() => {
        switch (domain) {
            case "image": return {domain, name: path_parts[1]};
            case "episodic": return {domain, record_name: path_parts[1], line_id: path_parts[2]};
            case "home": return {domain};
            case "subproject": return {domain, name: path_parts[1]};
        }
    })();

    return page ?? {domain: "home"};
}

export type Domain = {
    name: string,
    items: Array<string>,
};

export type DomainSearchRequest = string;