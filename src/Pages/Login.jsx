import React from "react";
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
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
    email: z.string().email(),
    password: z.string().min(5)
});


const Login = () => {
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
            email: "", password: ""
        }
    });

    const onSubmit = async (values) => {
        setLoading(true); 
        try {
            const userData = {
                email: values.email,
                password: values.password
            };
            const response = await axios.post(
                `${API_URL}/api/auth/login`,
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
        React.createElement("main", { className: "flex h-screen w-screen" },
            React.createElement("div", { className: "hidden md:block md:flex-1 bg-violet-blue" },),
            React.createElement("div", { className: "flex-1 flex justify-center items-center" },
                React.createElement(Card, { className: "drop-shadow-lg" },
                    React.createElement(CardHeader, { className: "md:pr-20" },
                        React.createElement(CardTitle, { className: "text-3xl" }, "Hey there! 👋"),
                        React.createElement(CardTitle, { className: "text-3xl" },
                            "Welcome to ",
                            React.createElement("span", { className: "text-violet-blue" }, "Bhmi NGO")
                        ),
                        React.createElement(CardDescription, { className: "py-2 text-md" }, "Community for a cause")
                    ),
                    React.createElement(CardContent, null,
                        React.createElement(Form, Object.assign({}, form),
                            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
                                React.createElement(FormField, {
                                    control: form.control,
                                    name: "email",
                                    render: ({ field }) => (
                                        React.createElement(FormItem, { className: "pb-3" },
                                            React.createElement(FormLabel, null, "Your Email"),
                                            React.createElement(FormControl, null,
                                                React.createElement(Input, Object.assign({ placeholder: "abc@gmail.com" }, field))
                                            ),
                                            React.createElement(FormMessage, null)
                                        )
                                    )
                                }),
                                React.createElement(FormField, {
                                    control: form.control,
                                    name: "password",
                                    render: ({ field }) => (
                                        React.createElement(FormItem, { className: "pb-3" },
                                            React.createElement(FormLabel, null, "Password"),
                                            React.createElement(FormControl, null,
                                                React.createElement(Input, Object.assign({ placeholder: "Enter password", type: "password" }, field))
                                            ),
                                            React.createElement(FormMessage, null)
                                        )
                                    )
                                }),
                                React.createElement(Button, { type: "submit", className: "w-full", disabled: loading },
                                    loading ? React.createElement(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }) : 'Login'
                                )
                            )
                        ),
                        React.createElement(CardDescription, { className: "pt-4 text-md" },
                            "Don't have an account? ",
                            React.createElement(Link, { to: "/signup" },
                                React.createElement("span", { className: "text-violet-blue font-bold hover:cursor-pointer" }, "Signup")
                            )
                        )
                    )
                ),
                React.createElement(Toaster, null)
            )
        )
    );
};

export default Login;