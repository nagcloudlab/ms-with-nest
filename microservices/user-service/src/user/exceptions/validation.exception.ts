import {ValidationError} from "class-validator";
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {HttpException, HttpStatus} from "@nestjs/common";


export  class ValidationException extends HttpException{
    constructor(public readonly validationErrors?: ValidationError[]) {
        super('Validation failed', HttpStatus.BAD_REQUEST);
    }
}