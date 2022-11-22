import { Transform, TransformFnParams } from 'class-transformer';
import { UltilityService } from '../shared/services/ultility.service';

const ultilityService = new UltilityService();

export function Trim() {
  return Transform((params: TransformFnParams) => {
    const { value } = params;
    if (Array.isArray(value)) return value.map((item) => item.trim());
    return value.trim();
  });
}

export function RemoveAccents() {
  return Transform((params: TransformFnParams) => {
    const { value } = params;
    if (Array.isArray(value)) return value.map((item) => ultilityService.removeAccents(item));
    return ultilityService.removeAccents(value);
  });
}
