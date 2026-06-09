import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"
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

export const Route = createFileRoute("/{-$locale}/_public/auth/sign-in")({
  component: RouteComponent,
})

const loginSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must be at most 16 characters long."),
  rememberMe: z.boolean(),
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validators: {
      onChange: loginSchema,
    },
  })

  return (
    <section className="w-full flex flex-col items-center py-10 border-t border-white/15">
      <div className="container min-h-[calc(100vh-248px)] flex items-center justify-center">
        <Card className="w-xl h-fit bg-(--ink)/10 border border-amber-400/15 shadow-md shadow-amber-400/15">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>Login</CardTitle>
            <CardDescription>Login with your account</CardDescription>
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
                <form.Field
                  name="rememberMe"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field
                        data-invalid={isInvalid}
                        orientation="horizontal"
                        className="flex items-center gap-2"
                      >
                        <Checkbox
                          id={field.name}
                          name={field.name}
                          checked={field.state.value}
                          onBlur={field.handleBlur}
                          onCheckedChange={(checked) =>
                            field.handleChange(!!checked)
                          }
                          aria-invalid={isInvalid}
                        />
                        <FieldLabel
                          htmlFor={field.name}
                          className="cursor-pointer select-none font-bold"
                        >
                          Remember Me
                        </FieldLabel>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </FieldGroup>
            </form>

            <div className="mt-8 flex items-center">
              <LocalizedLink
                to="/auth/sign-up"
                className="font-bold text-yellow-400 underline"
              >
                Create account
              </LocalizedLink>
            </div>
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
                Sign-In
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
