import { grade } from "../grades/grade.interface";

export interface Student {
    $key?: string;
    studentFirstName: string;
    studentLastName: string;
    studentClass: string;
    email: string;
    password: string;
    grade: grade;
}