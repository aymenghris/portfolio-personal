import { Button } from "@/components/ui/button"
import { FormField } from "./form-field"
import { TextAreaField } from "./text-area-field"

export const ContactForm = () => (
    <form
        action="https://getform.io/f/anlxkyea"
        method="post"
        className="xl:pl-10 2xl:pl-20"
    >
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-2">
            <FormField
                label="Name"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Aymen Ghris"
            />
            <FormField
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="aymen@example.com"
            />
        </div>

        <TextAreaField
            label="Message"
            id="message"
            name="message"
            placeholder="Hi!"
            required
        />

        <Button
            type="submit"
            variant="primary-amber"
            size="full"
            className="cc-reveal-up my-4 justify-center"
        >
            Submit
        </Button>
    </form>
)
