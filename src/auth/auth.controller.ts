import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login-dto.js';
import { CadastroDto } from './dto/cadastro-dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login (@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('/cadastro')
  cadastro (@Body() cadastroDto: CadastroDto) {
    return this.authService.cadastro(cadastroDto)
  }

  @Delete(':id')
  deletar (@Param('id') id: number) {
    return this,this.authService.deletar(id)
  }


}
