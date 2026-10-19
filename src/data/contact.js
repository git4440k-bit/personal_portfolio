/**
 * Contact and Social configuration for Kareem Mahmoud.
 * Adding LinkedIn or other channels later is as simple as adding an entry to `channels`.
 * No component modification is required.
 */
export const contactConfig = {
  heading: "Get in touch",
  subheading: "I'm currently open to full-time front-end roles and freelance opportunities. Feel free to reach out directly.",
  email: "kareem.mahmoud.dev@gmail.com",
  location: "Egypt",
  channels: [
    {
      id: "email",
      name: "Email",
      value: "kareem.mahmoud.dev@gmail.com",
      url: "mailto:kareem.mahmoud.dev@gmail.com",
      type: "email",
      description: "Direct email inquiry"
    },
    {
      id: "github",
      name: "GitHub",
      value: "github.com/kareemmahmoud",
      url: "https://github.com/kareemmahmoud",
      type: "external",
      description: "Code repositories and contributions"
    }
    /*
    To add LinkedIn in the future, simply uncomment or add:
    {
      id: "linkedin",
      name: "LinkedIn",
      value: "linkedin.com/in/kareemmahmoud",
      url: "https://www.linkedin.com/in/kareemmahmoud",
      type: "external",
      description: "Professional profile and networking"
    }
    */
  ]
};
