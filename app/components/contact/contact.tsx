import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info/"

export const Contact = () => (
    <section id="contact" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
            <ContactInfo />
            <ContactForm />
        </div>
    </section>
)
