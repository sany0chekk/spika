"use client";

import * as motion from "motion/react-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { signupValidationSchema } from "@/validation/signupValidation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.2,
        translateY: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
      }}
    >
      <Card className="max-w-[450px] w-full">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account to unlock all the features and start your journey
            with us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={({ email, password }) => {
              useAuthStore.getState().registerWithEmail(email, password);
            }}
          >
            <Form className="grid gap-6">
              <div className="grid gap-1.5 relative">
                <Label htmlFor="username">Your username</Label>
                <Field
                  as={Input}
                  name="username"
                  id="username"
                  placeholder="John Smith"
                />
                <ErrorMessage
                  name="username"
                  component="span"
                  className="absolute right-0 -bottom-5 font-medium text-xs text-red-600"
                />
              </div>
              <div className="grid gap-1.5 relative">
                <Label htmlFor="email">Your email adress</Label>
                <Field
                  as={Input}
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="absolute right-0 -bottom-5 font-medium text-xs text-red-600"
                />
              </div>
              <div className="grid gap-1.5 relative">
                <Label htmlFor="password">Your password</Label>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="qwerty123"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="absolute right-0 -bottom-5 font-medium text-xs text-red-600"
                />
              </div>
              <div className="mt-2 flex max-md:flex-wrap items-center justify-center gap-2">
                <Button className="w-full md:w-1/2">Sign Up</Button>
                <Button
                  type="button"
                  className="w-full md:w-1/2 flex items-center gap-2"
                  onClick={() => useAuthStore.getState().loginWithGoogle()}
                >
                  <Image
                    width="24"
                    height="24"
                    src="/images/png/gmail.png"
                    alt=""
                  />
                  Continue with Gmail
                </Button>
              </div>
            </Form>
          </Formik>
        </CardContent>
        <CardFooter>
          <CardDescription className="block text-center mx-auto">
            Already have an account?
            <br />
            <Link
              href="/login"
              className="text-blue-400 font-medium transition-opacity hover:opacity-70"
            >
              Log in to continue.
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
