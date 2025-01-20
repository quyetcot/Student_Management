import mongoose, { Schema } from 'mongoose'
const StudentSchema = new Schema(
    {
        student_name: { type: String, required: true },
        student_id: { type: String, unique: true, required: true },
        email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        dob: { type: Date, required: true },
        gender: { type: String, enum: ['Nam', 'Nữ', 'Khác'], required: true },
        discipline_records: { type: String },
        lecturer_name: { type: String },
        department: { type: String },
        courses: { type: Schema.Types.ObjectId, ref: "Courses" },
        avatar: { type: String },
        status: { type: String, enum: ['Đang học', 'Bảo lưu', 'Đã tốt nghiệp'], default: 'Đang học' }
    }, {
    timestamps: true,
    versionKey: false
}
);
const Student = mongoose.model("Student", StudentSchema);
export default Student;