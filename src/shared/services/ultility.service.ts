import { Injectable } from '@nestjs/common';

@Injectable()
export class UltilityService {
  removeAccents(text: string) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  isString(text: any) {
    return Object.prototype.toString.call(text) === '[object String]';
  }
}
