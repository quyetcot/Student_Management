import { Router } from 'express';
import { createStudent, deleteStudent, getAllStudent, getStudentById } from '../controllers/StudentsManage';

const StudentManageRouter = Router();
StudentManageRouter.get('/', getAllStudent);
StudentManageRouter.get('/:id', getStudentById);
StudentManageRouter.post('/', createStudent);
StudentManageRouter.get('/:id', deleteStudent);
export default StudentManageRouter