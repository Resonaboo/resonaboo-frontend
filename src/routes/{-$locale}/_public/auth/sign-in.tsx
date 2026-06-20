import { useForm } from "@tanstack/react-form"
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router"
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
import { useApi } from "#/lib"
import { toast } from "sonner"
import { useIntlayer } from "react-intlayer"

export const Route = createFileRoute("/{-$locale}/_public/auth/sign-in")({
  beforeLoad: async ({ context }) => {
    if (context.authInfo) {
      throw redirect({ to: "/{-$locale}/home" })
    }
  },
  component: RouteComponent,
})

const loginSchema = z.object({
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
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit(props) {
      api
        .POST("/api/auth/sign-in", {
          body: props.value,
        })
        .then((res) => {
          if (res.response.status !== 200 && res.error) {
            const error = res.error
            toast.error(`${res.response.status}: ${error.error}`, {
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

          toast.success(`👋 Logged in successfully!`, {
            duration: 1000,
            onAutoClose: () => {
              navigate({ to: "/{-$locale}/home" })
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

  const content = useIntlayer("sign-in")

  return (
    <section className="w-full flex flex-col items-center py-10 border-t border-white/15">
      <div className="container min-h-[calc(100vh-248px)] flex items-center justify-center">
        <Card className="w-xl h-fit bg-black/40 border border-amber-400/15 shadow-md shadow-amber-400/15">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>{content.title}</CardTitle>
            <CardDescription className="text-center">{content.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="sign-in-form"
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
                        <FieldLabel htmlFor={field.name}>
                          {content.email}
                        </FieldLabel>
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
                        <div className="flex items-start justify-between w-full">
                          <FieldLabel htmlFor={field.name}>
                            {content.password}
                          </FieldLabel>
                          <Button
                            type="button"
                            variant="link"
                            className="px-0 h-auto font-normal text-[8px] min-[350px]:text-[10px]"
                            render={<LocalizedLink to={"/auth/forgot-password"} />}
                          >
                            {content.forgot_password}
                          </Button>
                        </div>
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
            <Field orientation="vertical" className="justify-end">
              <Button type="submit" form="sign-in-form">
                {content.sign_in}
              </Button>
              <Button
                type="button"
                variant="outline"
                render={<LocalizedLink to={"/auth/sign-up"} />}
              >
                {content.sign_up}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
