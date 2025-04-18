
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "../../(site)/components/ui/button"
import { Input } from "../../(site)/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../(site)/components/ui/card"

export const metadata: Metadata = {
  title: "Sign In | Sahara",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className=" flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="grid gap-2">
            <Input type="password" placeholder="Password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Sign In</Button>
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
