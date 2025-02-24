import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppConfig from "@/config/app.config";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "@/shared/validation/schema";
import authAPI from "@/services/api/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Skeleton } from "./ui/skeleton";
import useAuthStore from "@/store/auth.store";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

type Schema = z.infer<typeof loginSchema>;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { setUser, setAccessToken, setRefreshToken } = useAuthStore(
    (state) => state
  );
  const navigate = useNavigate();
  const form = useForm<Schema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });


  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      setLoading(true);
      const res = await authAPI.login(data.email, data.password);

      console.log(res)
      if(res.status === 200){
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        navigate('/events');
      }
      form.reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
      throw new Error(error?.message);
    }
  };

  // const continueWithEmail = async (formdata) => {
  //   "use server";
  //   await signIn("credentials", { email: formdata.get("email") });
  // };

  // const continueWithGoogle = async () => {
  //   "use server";
  //   await signIn('google');
  // };
  if (loading) {
    return <Skeleton />;
  }
  return (
    <Card className="w-[350px] shadow-none border-0">
      <CardHeader>
        <CardTitle>
          <div className="p-2 mb-3 flex items-center justify-center text-2xl rounded">
            <span>
              <img
                src={AppConfig.logoUrl}
                alt="logo"
                width={120}
                height={100}
              />
            </span>
          </div>
          <div className="text-center text-xl">Login</div>
        </CardTitle>
        {/* <CardDescription className="text-center">
          Login your account
        </CardDescription> */}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="max.payne@test.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </Card>
  );
}
