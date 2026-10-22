import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entity/user-entity.js';
import { CadastroDto } from './dto/cadastro-dto.js';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOneBy({email: loginDto.email})
        if (user) { return 'Usuário cadastrado!'}
        return 'Usuário não cadastrado'
    }

    async cadastro(cadastroDto: CadastroDto) {
        const user = await this.userRepository.findOneBy({email: cadastroDto.email})
        if (user) { return 'Usuário cadastrado!'}

        const userNovo = await this.userRepository.create(cadastroDto)
        return this.userRepository.save(userNovo)
    }

    async deletar(id: number) {
        const user = await this.userRepository.findOneBy({id})
        if (user) { return await this.userRepository.delete(id) } 
        return 'Usuário não cadastrado'
    }

}
