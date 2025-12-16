import { Link } from 'react-router-dom'
import { ShieldCheck, Mail, UserCheck, Database, Lock } from 'lucide-react'

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-lg bg-white p-8 shadow-sm">
        <header className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-primary">
            <ShieldCheck className="h-10 w-10" />
            <span className="text-lg font-semibold">Privacy Policy</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Your privacy matters to us</h1>
            <p className="text-muted-foreground">
              This page explains what personal data we collect, why we collect it, how long we keep it, and your rights
              under applicable data protection laws. This policy is publicly accessible and does not require authentication.
            </p>
          </div>
        </header>

        {/* Quick overview */}
        <section className="grid gap-6 md:grid-cols-2">
          <article className="space-y-3 rounded-lg border border-border bg-muted/10 p-5">
            <div className="flex items-center gap-2 text-primary">
              <Database className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Who we are</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              The Data Controller for this website (https://app.wazzy.space/) is <strong>Wazzy Chatbot</strong>.
              Contact details are included below.
            </p>
          </article>

          <article className="space-y-3 rounded-lg border border-border bg-muted/10 p-5">
            <div className="flex items-center gap-2 text-primary">
              <UserCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Why we process data</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              We process personal data to manage communications, operate the website, provide services, comply with legal
              obligations, and improve our offering (including analytics and cookies, where applicable).
            </p>
          </article>

          <article className="space-y-3 rounded-lg border border-border bg-muted/10 p-5">
            <div className="flex items-center gap-2 text-primary">
              <Lock className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Security and retention</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              We apply appropriate technical and organisational safeguards and keep data only for as long as needed for
              the purposes described, or as required by law.
            </p>
          </article>

          <article className="space-y-3 rounded-lg border border-border bg-muted/10 p-5">
            <div className="flex items-center gap-2 text-primary">
              <Mail className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Your rights</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              You may request access, correction, deletion, restriction, portability, and object to processing in certain
              circumstances. See the “Your Rights” section for details and how to contact us.
            </p>
          </article>
        </section>

        {/* Full policy */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We believe your privacy is important. From the perspective of the person responsible for this website, the
              fact that you read and show interest in this section demonstrates your interest in the website itself. You
              should review privacy information whenever you visit new websites, especially if they request personal data.
              In this document, we explain what personal data we collect, on what basis, how long it will be stored, and
              other matters related to data protection regulations, in compliance with applicable law.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We encourage you to read these terms carefully before providing your personal data. For individuals under
              14 years of age, parental or guardian consent is required for the processing of their data. If you are under
              14, you should not submit your data on this website unless your parents or guardians authorise it. Under no
              circumstances will data be collected from minors relating to professional or financial circumstances, or the
              privacy of other family members, without their consent.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you have any questions, please contact us using the email address of the Data Controller or, where
              applicable, the Data Protection Officer. The Controller maintains an ongoing commitment to privacy and
              follows best practices in the processing of your personal data.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              In accordance with applicable data protection rules (EU Regulation 2016/679 of 27 April 2016 — GDPR),
              <strong> Wazzy Chatbots</strong> (the “Owner”), owner of the website <strong>https://app.wazzy.space/</strong>
              (the “Website”), sets out this Privacy Policy governing the processing of personal data. This policy applies
              without prejudice to the corresponding Legal Notice and Cookie Policy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">1. Data Controller</h3>
            <div className="rounded-lg border border-border bg-muted/10 p-5">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Data Controller:</strong> Wazzy Chatbots
                </li>
                <li>
                  <strong>Address:</strong>Cardanachama 10, Allariz, GALICIA  (Spain)
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a className="text-primary underline" href="mailto:juliovaldem@gmail.com">
                    juliovaldem@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a className="text-primary underline" href="tel:+34681947487">
                    681 947 487
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              We aim to protect users’ privacy. You should know that we will never request personal information unless it
              is truly necessary to provide services, we will never share it with third parties (except where essential,
              and only on legitimate grounds previously communicated), and we will never use your data for purposes
              unrelated to the contractual relationship.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              This entity complies with Spanish Organic Law 3/2018 (LOPDGDD), EU Regulation 2016/679 (GDPR), and Spanish
              Law 34/2002 on Information Society Services and Electronic Commerce (LSSICE/LSSI), as well as any
              implementing or supplementary rules.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Accordingly, any data requested through contact forms, data provided by simply accessing the Website
              (cookies), data related to comments on corporate social media pages linked from the Website, personal data
              entered into enabled sections, or data provided through other communication channels (e.g., email), will be
              processed by the Data Controller in accordance with applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">2. Purposes of Processing</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When you visit this Website, you may provide personal data. Such information may include personal data such
              as your IP address, name, physical address, email address, phone number, and other information. The purposes
              for which we process your data depend on the context or section in which it is collected, including:
            </p>

            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                <strong>Social media interactions:</strong> If you provide information through social networks linked from
                this Website, this entity acts as the Data Controller for the data provided within that context (e.g.,
                photos uploaded by us or third parties, comments you make on our posts, etc.). We will process that
                information solely in relation to your enquiry, management, or comment, and within the social network and
                its context. We will not extract such data unless we obtain your consent. Please note that your use of
                these platforms is subject to their own terms, and they may process your data under conditions different
                from those described here. The official profiles linked from the Website exist to help you learn about our
                activity and to provide an alternative communication channel; however, we disclaim responsibility for the
                processing carried out by the companies that operate those social networks.
              </li>
              <li>
                <strong>Cookies and automatic data collection:</strong> Additional purposes may be related to cookie
                management or information we collect automatically when you visit the Website, including technical
                operation, analytics, and service improvement, as described in the Cookie Policy.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">3. Data Retention Period</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Retention depends on the processing activity:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Cookie-related data is retained for the period indicated in the Cookie Policy.
              </li>
              <li>
                Data you provide through the channels made available by the Website (forms, email) will be kept for as
                long as the relationship with you remains in place or until you withdraw consent where applicable. We may
                then retain data where there is a legal obligation to do so, and in any case for the minimum period
                required depending on the relationship or processing activity. For example, invoicing data may be retained
                for tax and accounting purposes for <strong>6 years</strong>. There is also a <strong>5-year</strong> period
                under Article 1964 of the Spanish Civil Code for personal actions without a specific limitation period.
              </li>
              <li>
                Data included on social networks linked from the Website will be retained by us until you withdraw your
                consent. However, the entities responsible for those platforms may retain such data under their own
                policies, for which we accept no responsibility.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4. Legal Basis for Processing</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The legal basis depends on the processing activity and may include:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Compliance with one or more legal obligations (e.g., tax obligations relating to invoices issued).
              </li>
              <li>
                Your consent to process your data under the terms described (e.g., by ticking an acceptance box or signing
                an information document presented prior to processing).
              </li>
              <li>
                A pre-contractual or contractual relationship (e.g., when you provide data relating to an entrusted
                request, so we can respond appropriately).
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">5. Recipients of Your Data</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whenever we subcontract third parties to provide our services, we adopt appropriate legal safeguards and
              technical and organisational measures to ensure the protection of personal data in accordance with relevant
              law.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              In addition to the Data Controller described above, data may be processed by other entities depending on the
              nature of the processing, including:
            </p>

            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Social network operators linked from this Website, if you provide information through those networks.</li>
              <li>
                Service providers related to the Website, such as hosting providers (in our case, with data centres located
                within the European Economic Area).
              </li>
              <li>
                Public bodies, tax authorities, courts and tribunals, and in general competent authorities, where the Data
                Controller is legally obliged to disclose data.
              </li>
              <li>
                Certain cookie providers whose technologies may store information related to your IP address and browsing
                habits, as described in the Cookie Policy.
              </li>
            </ul>

            <p className="text-sm leading-relaxed text-muted-foreground">
              We apply strict supplier selection criteria to ensure compliance with data protection obligations and, where
              required, enter into data processing agreements imposing obligations including appropriate technical and
              organisational measures, processing only for agreed purposes and documented instructions, and deletion or
              return of data once services are completed.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">6. Your Rights</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You have the right to obtain confirmation as to whether we process personal data concerning you. You also
              have the right to access your personal data, request rectification of inaccurate data, or request erasure
              where, among other reasons, the data is no longer necessary for the purposes for which it was collected.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              In certain circumstances, you may request restriction of processing, in which case we will keep the data
              only for the exercise or defence of legal claims. In other circumstances, and for reasons related to your
              particular situation, you may object to processing.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Where processing is based on consent, you have the right to withdraw your consent at any time, without
              affecting the lawfulness of processing based on consent before its withdrawal. If you request it, we will
              cease processing your data except for compelling legitimate grounds, or the exercise or defence of possible
              claims.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              You may also request data portability so that your data can be transferred to another controller. Specific
              forms have been prepared and are available upon request to exercise your rights of access, rectification,
              erasure, restriction, objection, objection to automated individual decision-making (including profiling),
              and portability.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              If you believe your rights have not been properly addressed, you may lodge a complaint with the supervisory
              authority: the Spanish Data Protection Agency (Agencia Española de Protección de Datos — AEPD), Jorge Juan 6,
              28001 Madrid, or via its electronic office: https://sedeagpd.gob.es
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              If you prefer, you may contact us by post at the address listed above or by email, including a photocopy of
              your DNI/NIF or equivalent document to verify your identity, and stating the right you wish to exercise.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">7. Social Media Specific Information</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Owner maintains pages and/or profiles on various social networks linked from this Website. The Owner is
              not responsible for content posted by third parties on those networks. The use and processing of data by
              third parties on social networks is subject to their own general or specific terms, which may differ from
              this policy. We recommend reading those policies carefully.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Our online presence includes facebook.com and Instagram, both operated by Facebook Inc., 1601 S. California
              Ave, Palo Alto, CA 94304, USA. You can find us there and click “Like.” If you are logged in to Facebook,
              Facebook may associate your browsing with your account. For details on data collection, processing and usage
              by Facebook, as well as your rights and privacy settings, please consult Facebook’s privacy policy:
              http://www.facebook.com/policy.php
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              By using these social networks and communicating with us, you authorise us to use your personal data solely
              within the relevant platform for managing our professional page and the bidirectional communications we may
              have with followers through chat, messages, or other tools made available by Facebook now or in the future.
              Accordingly: (1) we process data within that social network to manage the list of people who like our page;
              and (2) you may receive information related to events, activities, and promotions. Outside these cases, we
              do not use your data.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Regarding Twitter: when a user follows us, we may access information about followers, specifically the
              username, photo (if the user has set one), and comments or “Tweets,” as well as other profile information
              such as followed accounts and followers. We do not use such information beyond managing and responding to
              “Tweets” or messages exchanged. The user’s “bio” may be visible to us. Users are responsible for how they
              use social networks. You can consult Twitter’s privacy policy here: https://twitter.com/es/privacy
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Twitter uses data for profiling, communication, connection, and creation and exchange of content between
              users and between users and the public. Tweets are short messages that can be created and sent via Twitter.
              Tweets are displayed to followers, Twitter users, and the public. We aim to share content through this
              network, which is why we have integrated it.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Service provider: Twitter, Inc., 6805777875 Market Street, Suite 900, San Francisco, CA 94103, USA.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              If buttons are embedded on our Website, Twitter may automatically collect personal information. Twitter may
              receive personal data such as the user’s IP address and browsing habits for the purpose of optimising
              targeted advertising. Twitter may store this information in the United States and share it with third parties
              where appropriate. If the user is logged in, Twitter may recognise the user’s activities. Embedded buttons
              may allow Twitter to associate activity with the user’s profile, store it, and process it, which may involve
              transferring data outside the EEA. The privacy safeguards offered by Twitter can be reviewed in its privacy
              policy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">8. Cookies and Other Matters</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As a user, you are solely responsible for the truthfulness and accuracy of the data you submit through this
              Website. The Owner does not accept liability in this regard and does not guarantee the accuracy, validity,
              or authenticity of personal data provided by users.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              The Data Controller reserves the right to modify and/or update this data protection information as necessary
              to ensure correct compliance with applicable regulations. If changes occur, the updated text will be
              published on this page and will be accessible to users. In each case, the relationship with users will be
              governed by the rules in force at the time the Website is accessed. The effective version can be checked via
              the date shown below.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              For information about cookies collected on this Website, please refer to our Cookie Policy.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              This Website may include certain videos processed through YouTube. YouTube is a social and video platform
              used to publish, review, rate, and comment on video clips. The purpose of integrating YouTube is to share
              our content through the service. If you provide information via comments on images or videos, your personal
              data will be processed under the privacy policy of that social network. Likewise, we use commenters’ data
              solely to manage and respond to messages exchanged.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Service provider: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. YouTube, LLC is a subsidiary of
              Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              For more information, please consult:
              <br />
              www.youtube.com/yt/about/
              <br />
              www.google.de/intl/policies/privacy/
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              If buttons are embedded on our Website, YouTube may automatically collect information. Pages you visit may
              transmit data to YouTube. Through this technical process, YouTube may receive personal data such as the
              user’s IP address and browsing habits to optimise targeted advertising. YouTube may store this information
              in the United States and may share it with third parties where appropriate. If the user is logged in to
              YouTube, YouTube may recognise the user’s activity, and embedded buttons may allow YouTube to associate such
              activity with the user profile, store it, and process it, which may involve transfers outside the EEA. The
              privacy safeguards offered by YouTube can be reviewed in its privacy policy.
            </p>
          </div>
        </section>

        <footer className="flex flex-col gap-3 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Need help?</span>
            <Link to="/login" className="text-primary hover:underline">
              Back to sign in
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
