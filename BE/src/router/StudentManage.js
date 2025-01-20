import { Router } from 'express';
import { createStudent, deleteStudent, getAllStudent, getStudentById, updateStudent } from '../controllers/StudentsManage';

const StudentManageRouter = Router();
StudentManageRouter.get('/', getAllStudent);
StudentManageRouter.get('/:id', getStudentById);
StudentManageRouter.post('/', createStudent);
StudentManageRouter.delete('/:id', deleteStudent);
StudentManageRouter.put('/:id', updateStudent);
export default StudentManageRouter