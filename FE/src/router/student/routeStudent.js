import routeNames from "./routeNames";
import routePaths from "./routePaths";

export const routeStudent = [
  {
    path: routePaths.STUDENT_PROFILE,
    name: routeNames.STUDENT_PROFILE,
    component: () => import("@/views/student/information/ProfileStudent.vue"),
  },
  {
    path: routePaths.ACADEMIC_PERFORMANCE,
    name: routeNames.ACADEMIC_PERFORMANCE,
    component: () => import("@/views/student/academicPerformance/index.vue"),
  },
  {
    path: routePaths.SCHEDULE_STUDENT,
    name: routeNames.SCHEDULE_STUDENT,
    component: () => import("@/views/student/schedule/Schedule.vue"),
  },
];
