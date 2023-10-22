import {z} from "zod";

export const formSchema = z.object({
    name:z.string().min(3,{message:"Name is short, Enter the Full Name of the person "}).max(255),
    email:z.string().email(),
    phoneNumber:z.string().min(10,{message:"Number is too short"}).max(10).refine((val)=>!isNaN(val as unknown as number),{
        message:"Phone Number should only contain numbers"
    }),
    companyName:z.string().min(3,{message:"Name is short, Enter the Full Name of the Company "}).max(255),
    address1:z.string().min(3).max(255),
    address2:z.string().min(3).max(255),
    facultyName:z.string().min(3).max(255),
    departmentName:z.string().min(3,{message:"Enter the Full Name of the Department"}).max(255),
    facultyDesignation:z.string().min(3).max(255),
})