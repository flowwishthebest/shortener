import * as Express from "express";
import * as BodyParser from "body-parser";

class ShortenUrl {
    public readonly id: number;
    public readonly sourceUrl: string;
    public readonly shortUrl: string;
    public readonly expiration: number;
}

const app = Express();

app.use(BodyParser());

const linksStorage: ShortenUrl[] = [];

app.post("/links", (req, res) => {
    const link = req.body.source;

    const existingUrl = linksStorage.find((l) => l.sourceUrl === link);

    if (!existingUrl) {
        res.status(201);
        res.json({
            data: {
                hash: link + Math.random(),
            },
        });
    } else {
        throw new Error("Url already exists");
    }
});

app.listen(3001, () => {
    console.log("The server running on http://localhost:3001");
});
