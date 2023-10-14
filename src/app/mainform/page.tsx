"use client"
import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/validators/auth';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import Webcam from "react-webcam";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from 'next/link';
import Image from 'next/image';

type Input = z.infer<typeof formSchema>;


const page = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { toast } = useToast();
  const router = useRouter()
  const webcamRef = useRef(null)
  const [imageSrc, setImageSrc] = useState(0)
  const capture = React.useCallback(() => {
    setImageSrc(webcamRef.current.getScreenshot())
    console.log(imageSrc);
  }, [webcamRef])
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({})
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      address1: "",
      address2: "",
      companyName: '',
      departmentName: '',
      facultyDesignation: '',
      facultyName: '',
      phoneNumber: '',
    },
  });

  function handleSubmit() {
    setFormData(form.getValues())
    console.log(formData);
  }
  return (
    <>
      {showModal &&
        <div className='absolute top-0 h-screen w-full flex flex-col justify-center items-center text-white' onClick={toggleModal}>
          <div className='w-1/2 h-1/2 flex flex-col justify-center items-center bg-slate-800'>
            <Webcam
              audio={false}
              height={240}
              width={240}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <Button onClick={capture}>Capture Image</Button>
          </div>
        </div>}

      <div className='h-screen mx-48'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='py-12'>
            <span className=''>Personal Details</span>
            <div className='bg-[#E9EDFF] h-auto w-full px-2 py-4 space-y-4 mt-4 mb-12'>
              <div className='px-4 space-y-4'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} className='w-1/2' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name of the Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of the Company" {...field} className='w-1/2' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='w-full px-4 grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Addresss Line 1</FormLabel>
                      <FormControl>
                        <Input placeholder="Address Line 1" {...field} className='w-2/3' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Addresss Line 2</FormLabel>
                      <FormControl>
                        <Input placeholder="Address Line 2" {...field} className='w-2/3' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <span className='py-12'>File Upload</span>
            <div className='bg-[#E9EDFF] h-auto w-full px-2 py-4 space-y-4 mt-4 mb-12'>
              <div className='px-4 space-y-4'>

                {imageSrc === 0 ? <div className=''>this is something</div> : <Image src={imageSrc} alt="webcam capture" width={240} height={240} />}
              </div>
            </div>



            {/* Hosptial Faculty details */}
            <span className='py-12'>Visiting Personnel Details</span>
            <div className='bg-[#E9EDFF] h-auto w-full px-2 py-4 space-y-4 mt-4 mb-12'>
              <div className='px-4 space-y-4'>
                <FormField
                  control={form.control}
                  name="facultyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name of the Faculty</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name of the Faculty" {...field} className='w-1/2' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* department */}
                <div className='w-1/2'>
                  <FormField
                    control={form.control}
                    name="departmentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department Name</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the name of the Department" />
                            </SelectTrigger>
                          </FormControl>
                          {/* The data for this could come from the backend */}
                          <SelectContent className='w-1/2'>
                            {
                              [
                                'Biomedical',
                                'Clinical engineering',
                                'Dietary department',
                                'Dining services',
                                'Facilities management',
                                'Health records',
                                'Inpatient service (IP)',
                                'IT Services',
                                'Medical director department',
                                'Non-professional services',
                                'Nursing department',
                                'Nursing department (led by a director of nursing or chief nursing officer)',
                                'Operation theater complex (OT)',
                                'Outpatient department (OPD)',
                                'Paramedical department',
                                'Pharmacy department',
                                'Physical medicine',
                                'Plant operations',
                                'Radiology department (X-ray)',
                                'Rehabilitation department',
                                'Surgical department',
                                'Technical support',
                                'Disclosure of information'
                              ]
                                .map((department) => {
                                  return (
                                    <SelectItem value={department.toString()} key={department}>
                                      {department}
                                    </SelectItem>
                                  );
                                })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="facultyDesignation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation of Faculty</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the name of the Department" />
                            </SelectTrigger>
                          </FormControl>
                          {/* The data for this could come from the backend */}
                          <SelectContent>
                            {["Chief Executive Officer (CEO)",
                              "Chief Financial Officer",
                              "Chief Information Officer",
                              "Chief Medical Officer",
                              "Chief Nursing Officer",
                              "Chief Operating Officer",
                              "Chief Pharmacist",
                              "Chief Radiologist",
                              "Chief Surgeon",
                              "Chief Technology Officer",
                              "Chief Facilities Officer",
                              "Chief of Clinical Engineering",
                              "Chief of Staff",
                              "Clinical Engineer",
                              "Dietitian",
                              "Director of Medical Services",
                              "Director of Operations",
                              "Director of Patient Services",
                              "Director of Nursing",
                              "Facilities Manager",
                              "Health Records Specialist",
                              "Hospital Administrator",
                              "Information Disclosure Officer",
                              "Inpatient Care Specialist",
                              "Medical Director",
                              "Non-professional Service Provider",
                              "Nurse",
                              "Operating Room Technician",
                              "Paramedic",
                              "Pharmacist",
                              "Physical Therapist",
                              "Plant Operations Manager",
                              "Radiologist",
                              "Rehabilitation Specialist",
                              "Surgeon",
                              "Technical Support Specialist",
                              "Dining Services Manager",
                              "General Practitioner"].map((department) => {
                                return (
                                  <SelectItem value={department.toString()} key={department}>
                                    {department}
                                  </SelectItem>
                                );
                              })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* WebCam Image */}
                  <Button onClick={toggleModal}>Capture Photo</Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
        {/* The Submit Button */}
        <div className='flex flex-col justify-center items-center'>
          <Button
            type='button'>
            <Link
              href={{
                pathname: '/viewpdf',
                query: {
                  name: form.getValues().name,
                  companyName: form.getValues().companyName,
                  email: form.getValues().email,
                  address1: form.getValues().address1,
                  address2: form.getValues().address2,
                  departmentName: form.getValues().departmentName,
                  facultyDesignation: form.getValues().facultyDesignation,
                  facultyName: form.getValues().facultyName,
                  phoneNumber: form.getValues().phoneNumber,
                }
              }}
            >
              Submit
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default page
