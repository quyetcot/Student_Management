import Student from "../model/StudentsManage"
import { StudentSchema } from "../schemas/ValidateStudentManage";

export const getAllStudent = async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json({
            message: "Thành công",
            data: student
        })

    } catch (error) {
        res.status(500).json({
            message: error.messgae
        })
    }
}
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                message: "Không tìm thấy student",
                data: {}
            })
        }
        res.status(200).json({
            message: "Thành công",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: error.messgae
        })
    }
}
export const createStudent = async (req, res) => {
    try {
        const { error } = StudentSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details.reduce((acc, detail) => {
                const field = detail.path.join('.'); // chuyen mang thanh chuoi
                if (!acc[field]) {
                    acc[field] = detail.message;
                }
                return acc;
            }, [])
            return res.status(400).json({
                message: message
            })
        }
        const student = await Student.create(req.body);
        res.status(200).json({
            message: "Thành công",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: error.messgae
        })
    }
}
export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({
                message: "Không tìm thấy student",
            })
        }
        res.status(200).json({
            message: "Thành công"
        })
    } catch (error) {
        res.status(500).json({
            message: error.messgae
        })
    }
}
export const updateStudent = async (req, res) => {
    try {
        const { error } = StudentSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details.reduce((acc, detail) => {
                const field = detail.path.join('.'); // chuyen mang thanh chuoi
                if (!acc[field]) {
                    acc[field] = detail.message;
                }
                return acc;
            }, [])
            return res.status(400).json({
                message: message
            })
        }
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({
            message: "Thành công",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: error.messgae
        })
    }
}