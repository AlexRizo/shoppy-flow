export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: any,
) => {
  console.log(file);
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${file.originalname.split('.')[0]}.${fileExtension}`;
  callback(null, fileName);
};
