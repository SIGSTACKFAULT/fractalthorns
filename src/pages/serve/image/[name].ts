import * as Fs from "fs/promises";

import { type APIRoute } from "astro";
import * as Image from "../../../loaders/image";

import Config from "../../../config";

export const GET: APIRoute = async context => {
    const name = context.params.name ?? "";
    const image_model = await Image.get(name);
    
    if (!image_model) {
        return new Response(null, {status: 404});
    }

    const png_path = `${Config.authorland_root}/images/${name}/img.png`;
    const png_data = await Fs.readFile(png_path);

    const response = new Response(png_data, {headers: {"Content-Type": "image/png"}});
    return response;
};