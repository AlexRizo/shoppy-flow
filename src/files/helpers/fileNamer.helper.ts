import { v4 as uuid } from 'uuid';

export const fileNamer = (file: Express.Multer.File) => {
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;
  return fileName;
};
