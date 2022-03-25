


import {PipeTransform, Injectable, ArgumentMetadata, ValidationPipe, BadRequestException} from '@nestjs/common';
import {ValidationException} from "../exceptions/validation.exception";

@Injectable()
export class RequestValidationPipe extends ValidationPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log(value)
        console.log(metadata)
        try {
            await super.transform(value, metadata);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw new ValidationException();
            }
            throw error;
        }
        return value;
    }
}