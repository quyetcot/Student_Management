import routeNames from "./routeNames";
import routePaths from "./routePaths";

export const routeStudent = [
    {
        path: routePaths.STUDENT_INFORMATION,
        name: routeNames.STUDENT_INFORMATION,
        component:()=>import('@/views/student/information/index.vue')
    },
    {
        path:routePaths.ACADEMIC_PERFORMANCE,
        name:routeNames.ACADEMIC_PERFORMANCE,
        component:()=>import('@/views/student/academicPerformance/index.vue')
    }
]