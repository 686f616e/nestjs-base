import { ErrorCode } from '@common/constants/errors';

interface Response {
  code: ErrorCode;
  message: string;
  data: { [k: string]: any };
}

export class ErrorResponseDto implements Response {
  code: ErrorCode;
  message: string;
  data: { [k: string]: any };

  constructor(code: ErrorCode, message: string) {
    Object.assign(this, { code, message });
  }
}

export class SuccessResponseDto implements Response {
  code: ErrorCode;
  message: string;
  data: { [k: string]: any };

  constructor(data: { [k: string]: any }) {
    Object.assign(this, { data, code: ErrorCode.SUCCESS, message: 'Success' });
  }
}
