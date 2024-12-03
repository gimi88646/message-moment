const ConditionsList = () => (
  <ul className="list-disc pl-6">
    <br />
    <li className="font-jetBrain">
      You will not use the platform for any illegal or unauthorized purpose.
    </li>
    <li className="font-jetBrain">
      You will not violate any laws in your jurisdiction.
    </li>
    <li className="font-jetBrain">
      You will not infringe upon the rights of others, including but not limited
      to, the right to privacy and intellectual property rights.
    </li>
    <li className="font-jetBrain">
      You will not use the platform in any manner that could damage, disable,
      overburden, or impair the platform.
    </li>
    <li className="font-jetBrain">
      You will not abuse or harm others in any manner through the use of the
      platform.
    </li>
    <li className="font-jetBrain">
      You represent and warrant that you are at least 16 years of age. If you
      are under 16 years of age, you may not use this platform without the
      express consent and supervision of a parent or legal guardian. By using
      this platform, you acknowledge and agree that you are solely responsible
      for complying with any and all laws and regulations applicable to you,
      including any age restrictions or other eligibility criteria.
    </li>
  </ul>
);

const TermsAndConditionData = [
  {
    id: 1,
    HeadingNo: 1,
    Heading: "Introduction",
    Detail: (
      <>
        Welcome to MessageMoment, a discreet chat service where correspondence
        between two or more parties occurs between known parties only. By using
        MessageMoment, you agree to be bound by these Terms and Conditions of
        Use (“T&Cs”). If you do not agree with these T&Cs, you should not use
        MessageMoment.
      </>
    ),
  },
  {
    id: 2,
    HeadingNo: 2,
    Heading: "Conditions of Use",
    Detail: (
      <>
        By using MessageMoment, you agree to the following conditions of use:
        <ConditionsList />
      </>
    ),
  },
  {
    id: 3,
    HeadingNo: 3,
    Heading: "Responsibility to Retain Information",
    Detail: (
      <>
        It is the responsibility of the user to capture or save any information
        they wish to retain as the platform is provided on an "as is" and "as
        available" basis.
      </>
    ),
  },
  {
    id: 4,
    HeadingNo: 4,
    Heading: "Disclaimer of Warranties",
    Detail: (
      <>
        MessageMoment provides its platform on an “as is” and “as available”
        basis and makes no representations or warranties of any kind, express or
        implied, as to the operation of the platform or the information, content
        or materials included on the platform.
      </>
    ),
  },
  {
    id: 5,
    HeadingNo: 5,
    Heading: "Indemnification",
    Detail: (
      <>
        You agree to indemnify, defend and hold harmless MessageMoment, its
        directors, officers, employees, agents, licensors, suppliers, and any
        third-party information providers to the service from and against all
        losses, expenses, damages, and costs, including reasonable attorneys’
        fees, resulting from any violation of these T&Cs or any activity related
        to your use of the platform.
      </>
    ),
  },
  {
    id: 6,
    HeadingNo: 6,
    Heading: "Termination of Use",
    Detail: (
      <>
        MessageMoment reserves the right to terminate or restrict your use of
        the platform at any time, with or without notice, for any or no reason,
        and without liability to you.
      </>
    ),
  },
  {
    id: 7,
    HeadingNo: 7,
    Heading: "Amendments to these T&Cs",
    Detail: (
      <>
        MessageMoment reserves the right to update these T&Cs at any time and
        will notify users of any changes through the platform.
      </>
    ),
  },
  {
    id: 8,
    HeadingNo: 8,
    Heading: "Governing Law",
    Detail: (
      <>
        These Terms and Conditions of Use (“T&Cs”) shall be governed by and
        construed in accordance with the laws of the jurisdiction in which you
        reside. Any dispute arising out of or in connection with these T&Cs or
        the use of MessageMoment shall be resolved exclusively through the
        courts of the jurisdiction in which you reside.
      </>
    ),
  },
  {
    id: 9,
    HeadingNo: 9,
    Heading: "Entire Agreement",
    Detail: (
      <>
        These T&Cs, together with the{" "}
        <a
          href="/privacy"
          className="text-[--Blue] cursor-pointer hover:underline font-jetBrain"
        >
          Privacy Policy
        </a>
        , constitute the entire agreement between you and MessageMoment relating
        to the use of the platform. If any provision of these T&Cs is found to
        be invalid or unenforceable, the remaining provisions shall remain in
        full force and effect.
      </>
    ),
  },
  {
    id: 10,
    HeadingNo: 10,
    Heading: "Contact Us",
    Detail: (
      <>
        If you have any questions regarding these Terms and Conditions of Use,
        please{" "}
        <a
          href="/contact-us"
          className="text-[--Blue] cursor-pointer hover:underline font-jetBrain"
        >
          Contact Us
        </a>
        .
      </>
    ),
  },
];

export default TermsAndConditionData;
