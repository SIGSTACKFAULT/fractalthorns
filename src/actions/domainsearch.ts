import * as Domain from "../descriptors/domain";
import * as Record from "../descriptors/record";
import * as ImageLoader from "../loaders/image";
import * as EpisodicLoader from "../loaders/episodic";
import * as Search from "./search";
 
export type Item = Domain.Page & {line?: Record.LineModel}; // TODO need better model for this shit
export async function find_items(term: string): Promise<Array<Item>> {
    const results: Array<Item> = [];

    const images = await find_image_items(term);
    results.push(...images);

    const records = await find_episodic_items(term);
    results.push(...records);

    const episodic_lines = await find_episodic_lines(term);
    results.push(...episodic_lines);

    return results;
}

export async function find_image_items(term: string): Promise<Array<Item & {domain: "image"}>> {
    const images = await ImageLoader.get_all();
    const matching_images = images.filter(image => image.name.includes(term) || image.title.includes(term));
    const image_items = matching_images.map(image => ({domain: "image" as const, item: image.name}));
    return image_items;
}

export async function find_episodic_items(term: string): Promise<Array<Item & {domain: "episodic"}>> {
    const episodic = await EpisodicLoader.get();
    const matching_records = episodic.records.filter(record => record.solved && record.name.includes(term));
    const record_items = matching_records.map(record => ({domain: "episodic" as const, item: record.name}));
    return record_items;
}

export async function find_episodic_lines(term: string): Promise<Array<Item & {domain: "episodic-line"}>> {
    const results = await Search.search({whole_words: true}, term);
    const lines = Object.entries(results)
        .flatMap(([name, matches]) => matches
            .map(match => ({domain: "episodic-line" as const, item: name, line: match.line}))
        );
    return lines;
}