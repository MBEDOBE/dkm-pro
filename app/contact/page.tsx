import Head from "next/head";
import ContactContent from "@/components/contact/ContactContent";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Daniel Mbedobe Kunji</title>
        <meta
          name="description"
          content="Get in touch with Daniel Mbedobe Kunji for freelance web development or data entry services. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="contact Daniel Mbedobe Kunji, freelance web developer, frontend projects, MERN stack, contact form, Ghana developer, data entry specialist, work with Daniel"
        />
        <meta name="author" content="Daniel Mbedobe" />
        <link rel="canonical" href="https://dkmbedobe.onrender.com/contact" />
      </Head>

      <ContactContent />
    </>
  );
};

export default Contact;
