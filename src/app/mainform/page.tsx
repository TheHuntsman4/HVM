"use client"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/validators/auth';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type Input = z.infer<typeof formSchema>;


const page = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(0)
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

  function handleSubmit(data: Input) {
    console.log(data);
  }
  return (
    <div className='h-screen mx-48'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='py-12'>
          <span className=''>Personal Details</span>
          <div className='bg-[#E9EDFF] h-auto w-1/2 px-2 py-4 space-y-4'>
            <div className='px-4 space-y-4'>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} className='w-1/4' />
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
                    <Input placeholder="Name of the Company" {...field} className='w-1/4' />
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
                      <Input placeholder="Address Line 1" {...field} className='w-2/3'/>
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
                      <Input placeholder="Address Line 2" {...field} className='w-2/3'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      {/* The Submit Button */}
      <div className='flex flex-col justify-center items-center'>
        <Button
          type='button'
          onClick={() => {
            console.log(form.getValues());
          }}
        >Submit</Button>
      </div>
    </div>
  )
}

export default page
