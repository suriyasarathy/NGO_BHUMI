import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";


const API_URL = "http://localhost:3000";

const formSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5)
});

const Signup = () => {
    const { toast } = useToast();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const showToast = (message) => {
        toast({
            variant: "destructive",
            description: message
        });
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "", email: "", password: ""
        }
    });

    const onSubmit = async (values) => {
        setLoading(true); 
        try {
            const userData = {
                username: values.name,
                email: values.email,
                password: values.password
            };
            const response = await axios.post(
                `${API_URL}/api/auth/signup`,
                userData,
                { withCredentials: true }
            );
            const { success, message } = response.data;
            console.log("API response: ", response);

            if (!success) {
                console.log("Error occurred");
                showToast(message);
            } else {
                console.log("Form submitted: ", values);
                form.reset();

                navigate("/");
            }
        } catch (error) {
            console.error("Form submission error: ", error);
            showToast('Error occurred');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <main className="flex h-screen w-screen">
            <div className="hidden md:block md:flex-1 bg-violet-blue">
                
            </div>
            <div className="flex-1 flex justify-center items-center">
                <Toaster />
                <div className="card border p-5 rounded-md">
                    <div className="card-header md:pr-20">
                        <div className="text-3xl font-medium">Hey there! 👋</div>
                        <div className="text-3xl font-medium">
                            Welcome to <span className="text-violet-blue">Bhumi NGO</span>
                        </div>
                        <div className="py-2 text-md">Community for a cause</div>
                    </div>
                    <div className="card-content">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="pb-3">
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="pb-3">
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="abc@gmail.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="pb-3">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter password" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Signup"}
                                </Button>
                            </form>
                        </Form>
                        <div className="pt-4 text-md">
                            Already have an account?{" "}
                            <Link to="/login">
                                <span className="text-violet-blue font-bold hover:cursor-pointer">Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;