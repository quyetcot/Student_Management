import StudentManageRouter from "./StudentManage";

export default function routes(app) {
    app.use('/api/v1/students-manage/', StudentManageRouter)
}