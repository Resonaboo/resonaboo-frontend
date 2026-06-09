import { createFileRoute } from '@tanstack/react-router'
import { useForm } from "@tanstack/react-form"
import z from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import { Checkbox } from "#/components/ui/checkbox"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "#/components/ui/field"
import { Input } from "#/components/ui/input"
import { LocalizedLink } from "#/components/localized-links"
import { Button } from "#/components/ui/button"

export const Route = createFileRoute('/{-$locale}/_public/auth/sign-up')({
  component: RouteComponent,
})

const signUpSchema = z.object({
  username: z.string()
    .min(4, "Username must be at least 4 characters long.")
    .max(16, "Username must be at most 16 characters long."),
  email: z.email("Invalid email address."),
  password: z.string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must be at most 16 characters long."),
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    validators: {
      onChange: signUpSchema,
    },
  })

  return (
    <section className="w-full flex flex-col items-center py-10 border-t border-white/15">
      <div className="container min-h-[calc(100vh-248px)] flex items-center justify-center">
        <Card className="w-xl h-fit bg-(--ink)/10 border border-amber-400/15 shadow-md shadow-amber-400/15">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
            >
              <FieldGroup>
                <form.Field
                  name="username"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                        <Input
                          id={field.name}
                          type="username"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="your_username"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="email"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                        <Input
                          id={field.name}
                          type="email"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="example@gmail.com"
                          autoComplete="on"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="password"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                        <Input
                          id={field.name}
                          type="password"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="********"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal" className="justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit" form="bug-report-form">
                Sign-Up
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

