import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
async function bootstrap() {
const app = await NestFactory.create(AppModule, {cors: true});
app.listen(3000)
.then(() => {
console.log("successfully stared on port 3000");
})
.catch((error) => {
console.log(error);
})
}
bootstrap();