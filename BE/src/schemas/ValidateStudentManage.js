import Joi from 'joi'

export const StudentSchema = Joi.object({
    student_name: Joi.string().required().messages({
        "any.required": "Tên sinh viên là bắt buộc",
        "string.empty": "Tên sinh viên không được để trống"
    }),
    student_id: Joi.string().required().messages({
        "any.required": "Mã sinh viên là bắt buộc",
        "string.empty": "Mã sinh viên không được để trống"
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email là trường bắt buộc",
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
    }),
    dob: Joi.date().required().messages({
        "any.required": "Ngày sinh là bắt buộc",
        "date.base": "Ngày sinh phải là một ngày hợp lệ",
    }),
    gender: Joi.string().valid('Nam', 'Nữ', 'Khác').required().messages({
        "any.required": "Giới tính là bắt buộc",
        "string.empty": "Giới tính không được để trống",
        "any.only": "Giới tính phải là 'Nam', 'Nữ' hoặc 'Khác'"
    }),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
        "any.required": "Số điện thoại là bắt buộc",
        "string.empty": "Số điện thoại không được để trống",
        "string.pattern.base": "Số điện thoại phải gồm 10 chữ số"
    }),
    address: Joi.string().required().messages({
        "any.required": "Địa chỉ là bắt buộc",
        "string.empty": "Địa chỉ không được để trống"
    }),
})