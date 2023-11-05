import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student.service';
import { StudentController } from './controller/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tahreemiqbal23:1wrJvhvahHrIlNTF@cluster0.h4unhcd.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema}])
  ],
  controllers: [AppController,StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
