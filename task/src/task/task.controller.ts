import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(+id);
  }

  @Post(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: CreateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Post(':id/delete')
  delete(@Param('id') id: number) {
    return this.taskService.delete(+id);
  }
}
