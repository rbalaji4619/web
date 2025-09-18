import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import '../styles/OurProcess.css'
import AOS from "aos";

const processSteps = [
  {
    title: "Requirement Analysis",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Frequirement_analysis.1knZwWb4.webp&f=webp",
    desc: "Requirement analysis is the phase for business needs assessment. Following best practices for professional requirement analysis for software projects, we start this at the project initiation phase, identify risks, assign key stakeholders, and establish a project timeline listing all assumptions for clarity and approval from both sides."
  },
  {
    title: "Scope Definition & Prototyping",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Fscope_defenetion.B_WxelFe.webp&f=webp",
    desc: "The scope definition and prototyping stage is for clear scope definition for software projects. For effective scope definition and prototyping solutions, we analyse product requirements to select the appropriate technology for it, create a comprehensive Business Requirement Document, Functional Document, Sprint Planning, use cases, and follow the fixed scope for MVP development ↗, creating low fidelity wireframes."
  },
  {
    title: "UI/UX Design",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Fui_ux_design.DYTqSb7P.webp&f=webp",
    desc: "The UI/UX design marks an important milestone for developing any app as end users directly experience it. As part of our professional UI/UX design services for mobile apps and web apps, we prioritize intuitive user interface design ↗ after thorough research and iterate on multiple versions for feedback from users and stakeholders before deciding on the final one."
  },
  {
    title: "Development",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Fdevelopment.5uD7ILbJ.webp&f=webp",
    desc: "App development takes place parallely with design, where we complete initial tech architecture and database design. Post design approval, we follow Agile development methodologies for continuous development and delivery. As part of our comprehensive software development services, we work on two-week sprints, cover change management, and report weekly progress."
  },
  {
    title: "Testing",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2FTesting.B6NMqlef.webp&f=webp",
    desc: "We follow the traditional STLC process for end-to-end software testing for mobile applications. Manual QA testing ↗ is conducted in the initial phase and on approaching launch, we conduct UAT, Load, and Smoke testing. We prioritize code quality and code-level testing as part of our comprehensive QA and testing solutions and leverage advanced automated testing tools too based on project needs to deliver a bug-free application."
  },
  {
    title: "Launch",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Flauch.C0tw8M7V.webp&f=webp",
    desc: "The app launch is the dream phase where your idea has a tangible form and is ready for its users. As part of our expert app launch services for iOS ↗ and Android ↗, we follow a comprehensive checklist to go live, manage third-party integrations, and cater to PlayStore and App Store publishing compliances in advance to enable you to focus on GTM."
  },
  {
    title: "Maintenance",
    img: "https://www.sciflare.com/_image?href=%2F_astro%2Fmaintainance.CRiB33pD.webp&f=webp",
    desc: "Our post-launch support offers expert software maintenance and reliable app maintenance services for businesses, covering application optimization, weekly backups, alignment with user feedback, migration, performance enhancements, and server maintenance to help you achieve consistent top-notch app performance."
  }
];

const OurProcess = () => {
React.useEffect(() => {
  AOS.init({
    duration: 800, // animation duration
    easing: "ease-in-out", // smooth animation
    once: false, // if true, animation happens only once
    mirror: false, // if true, animation happens again on scroll up
  });
  AOS.refresh(); // <-- important to recalculate positions
}, []);

  return (
    // <section className="py-5">
    //   <div className="container">
    //     <div className="row">

    //       <div className="col-md-4 position-sticky" style={{ top: "120px", height: "fit-content" }}>
    //         <h2 className="display-5 fw-bold">
    //           Our <br />
    //           <span className="text-primary">Process</span>
    //         </h2>
    //       </div>

    //       <div className="col-md-8">
    //         <div className="row g-4">
    //           {processSteps.map((step, index) => (
    //             <div className="col-12" key={index}>
    //               <div
    //                 className="card shadow-lg border-0 rounded-4 p-4 d-flex flex-row align-items-start"
    //                 data-aos="fade-up"
    //                 data-aos-delay={index * 150}
    //               >
    //                 <img
    //                   src={step.img}
    //                   alt={step.title}
    //                   className="rounded-3 shadow-sm me-4"
    //                   style={{ width: "80px", height: "80px", objectFit: "cover" }}
    //                 />
    //                 <div>
    //                   <h5 className="fw-bold mb-2">{step.title}</h5>
    //                   <p className="text-muted mb-0 text-justify">{step.desc}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </section>

    <section className="our-process py-5">
      <div className="container">
        <div className="row">
          {/* Sticky Heading */}
          <div className="col-md-4 mb-4 position-sticky" style={{ top: "120px", height: "fit-content" }}>
            <h2 className="process-title">
              Our <br />
              <span>Process</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="col-md-8">
            <div className="process-steps">
              {processSteps.map((step, index) => (
                // <div className="process-card fade-in" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                //   <div className="d-flex align-items-start gap-3">
                //     <img
                //       src={step.img}
                //       alt={step.title}
                //       className="process-img"
                //     />
                //     <div>
                //       <h3 className="process-step-title">{step.title}</h3>
                //       <p className="process-desc">{step.desc}</p>
                //     </div>
                //   </div>
                // </div>
                <div
                  className="process-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="d-flex align-items-start gap-3">
                    <img src={step.img} alt={step.title} className="process-img" />
                    <div>
                      <h3 className="process-step-title">{step.title}</h3>
                      <p className="process-desc">{step.desc}</p>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
