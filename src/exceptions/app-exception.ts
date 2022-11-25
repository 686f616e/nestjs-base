import { ErrorCode } from '@common/constants/errors';
import { HttpException, HttpStatus } from '@nestjs/common';
export class AppException extends HttpException {
  errorCode: string;

  message: string;

  constructor(errorCode: ErrorCode) {
    super(null, HttpStatus.BAD_REQUEST);
    Object.assign(this, { errorCode });
  }
}
