import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file) {
    return callback(
      new BadRequestException('Make sure to upload a file'),
      false,
    );
  }

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png'];

  if (validExtensions.includes(fileExtension)) {
    return callback(null, true);
  }

  return callback(
    new BadRequestException(
      `Invalid file type. only: ${validExtensions.join(', ')} extensions are allowed`,
    ),
    false,
  );
};
