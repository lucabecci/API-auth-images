import multer, { StorageEngine } from "multer";
import { v4 as uuidV4 } from "uuid";
import path from "path";

class MulterStorage {
  public storage: StorageEngine = multer.diskStorage({
    destination: <string>"uploads",
    filename: (req, file, cb) => {
      cb(null, uuidV4() + path.extname(file.originalname));
    },
  });
}

const multerStorage = new MulterStorage();

export default multer({ storage: multerStorage.storage });
