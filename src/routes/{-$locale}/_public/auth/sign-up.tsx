import { useForm } from "@tanstack/react-form"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import z from "zod"
import { Button } from "#/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "#/components/ui/field"
import { Input } from "#/components/ui/input"
import { useApi } from "#/lib"
import { toast } from "sonner"
import { LocalizedLink } from "#/components/localized-links"
import { useIntl, useIntlayer } from "react-intlayer"

export const Route = createFileRoute("/{-$locale}/_public/auth/sign-up")({
  component: RouteComponent,
})

const signUpSchema = z.object({
  username: z
    .string()
    .min(6, "Username must be at least 6 characters long.")
    .max(16, "Username must be at most 16 characters long."),
  email: z.email("Invalid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must be at most 16 characters long."),
})

function RouteComponent() {
  const navigate = useNavigate()

  const api = useApi()

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    validators: {
      onChange: signUpSchema,
    },
    onSubmit(props) {
      api
        .POST("/auth/register", {
          body: {
            username: props.value.username,
            email: props.value.email,
            password: props.value.password,
          },
        })
        .then((res) => {
          if (res.response.status !== 201 && res.error) {
            const error = res.error
            toast.error(`${error.code}: ${error.error}`, {
              duration: 3000,
              position: "bottom-center",
              className: "bg-red-400",
              style: {
                color: "white",
                backgroundColor: "red",
                borderColor: "red",
              },
            })
            return
          }

          toast.success(`👋 Account created successfully!`, {
            duration: 1000,
            onAutoClose: () => {
              navigate({ to: "/{-$locale}/auth/sign-in" })
            },
            position: "bottom-center",
            className: "bg-green-400",
            style: {
              color: "white",
              backgroundColor: "green",
              borderColor: "green",
            },
          })
        })
        .catch((error) => {
          toast.error(`${error}`, {
            duration: 3000,
            position: "bottom-center",
            className: "bg-red-400",
            style: {
              color: "white",
              backgroundColor: "red",
              borderColor: "red",
            },
          })
        })
    },
  })

  const content = useIntlayer("sign-up")

  return (
    <section className="w-full flex flex-col items-center py-10 border-t border-white/15">
      <div className="container min-h-[calc(100vh-248px)] flex items-center justify-center">
        <Card className="w-xl h-fit bg-(--ink)/10 border border-amber-400/15 shadow-md shadow-amber-400/15">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="sign-up-form"
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
                        <FieldLabel htmlFor={field.name}>{content.username}</FieldLabel>
                        <Input
                          id={field.name}
                          type="username"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder={content.username_placeholder}
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
                        <FieldLabel htmlFor={field.name}>{content.email}</FieldLabel>
                        <Input
                          id={field.name}
                          type="email"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder={content.email_placeholder}
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
                        <FieldLabel htmlFor={field.name}>{content.password}</FieldLabel>
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
              <Button type="submit" form="sign-up-form">
                {content.sign_up}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
