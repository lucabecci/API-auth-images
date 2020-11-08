import { Request, Response, Handler } from "express";

class ImagesController {
    public getImages: Handler = (req: Request, res: Response): Response => {
        return res.status(200).json({
            success: true,
            images: []
        })
    }
}

export default ImagesController