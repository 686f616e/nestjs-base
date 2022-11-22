import { ErrorResponseDto } from '@common/dtos/response.dto';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18n: I18nService) {}

  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const lang = request['i18lang'] || 'en';

    const message = await this.i18n.translate(`errors.${exception.code}`, { lang });

    const error = new ErrorResponseDto(exception.code, message);

    response.status(status).json(error);
  }
}
