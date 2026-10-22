import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto{
    @IsEmail({}, {message: 'O e-mail deve ser válido!'})
    @IsNotEmpty({ message: 'O e-mail não deve ser vazio!'})
    email!: string

    @IsString({message: 'A senha deve ser uma string válida'})
    @IsNotEmpty({message: 'Senha não deve ser vazia'})
    senha!: string
}