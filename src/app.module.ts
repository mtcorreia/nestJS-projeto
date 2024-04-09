import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [EmpresaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
