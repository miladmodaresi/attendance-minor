import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class AttendanceRepository {
  async findOne(id: string) {
    const contents = await readFile('attendances.json', 'utf8');
    const attendances = JSON.parse(contents);

    return attendances[id];
  }

  async findAll() {
    const contents = await readFile('attendances.json', 'utf8');
    const attendances = JSON.parse(contents);

    return attendances;
  }

  async create(content: string) {
    const contents = await readFile('attendances.json', 'utf8');
    const attendances = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    attendances[id] = { id, content };

    await writeFile('attendances.json', JSON.stringify(attendances));
  }
}
