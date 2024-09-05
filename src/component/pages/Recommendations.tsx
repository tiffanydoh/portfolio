import React from "react";
import RecommendationBox from "../RecommendationBox.tsx";
import WindowTemplate from "../WindowTemplate.tsx";

export default function Recommendations() {
  return (
    <WindowTemplate>
      <div className="grid gap-5">
        <RecommendationBox
          name="Gokul Shankar"
          position="Senior Staff Software Engineer"
          company="Solstice Power Technologies"
          content={`Tiffany is an incredible software engineer that is always curious and looking to learn. When she joined the team, she immediately dove in and took on every task given to her, no matter how complex. She's consistently dedicated to writing and delivering high quality code, frequently going the extra mile to ensure the best possible product for her end customers.

        Her pursuit of knowledge extends to taking extra classes, getting certifications, and learning from seniors. She also frequently shows the initiative to take on more responsibility and grow as an engineer - which includes giving demos/presentations and leading more projects on her team, from start to finish. I've seen her progress in her career and know she's going to accomplish great things in the future.

        It's also an absolute pleasure working with Tiffany. She always has a positive attitude, is optimistic about her work, and is genuinely a caring and empathetic person; any team would be extremely lucky to have her talent.`}
        />

        <RecommendationBox
          name="Andrea Tran"
          position="Software Engineer I"
          company="Solstice Power Technologies"
          content={`I worked closely with Tiffany at Solstice. She consistently demonstrated strong technical abilities and a deep commitment to her work. Tiffany made significant contributions to projects that involved handling complex legislative requirements and even led her own initiative to increase accessibility.

        Tiffany has excellent knowledge of SQL and JavaScript, which she applied to solve complex problems efficiently. Her ability to navigate and manage these technologies was evident in the high-quality solutions she delivered.

        In addition to her technical skills, Tiffany is a great team player. She actively participated in team discussions and played a key role in mentoring junior colleagues. Her willingness to share knowledge and support others contributed significantly to a collaborative and productive work environment. All these qualities culminated in her well-deserved promotion to Software Engineer I.

        I highly recommend Tiffany for any engineering role. She is a talented individual who will be an asset to any team fortunate enough to have her.`}
        />

        <RecommendationBox
          name="Jacob Ford"
          position="Senior Data Scientist"
          company="Solstice Power Technologies"
          content={`I had the pleasure of working with Tiffany on Solstice's Product and Engineering Team. She was a top contributor every sprint and showed her initiative by adding valued input and solutioning on bug reports that hindered progress. 

        Tiffany was also a valued member of the EnergyScore team, where she helped refactor our codebase for the machine leaning model platform. She showed her intellectual curiosity and drive by joining the team and has helped us grow the ML product from inception to launch. Future organizations would be well-advised to hire Tiffany, or more ideally, a team of Tiffanys.`}
        />

        <RecommendationBox
          name="Daniel Ramos"
          position="QA Engineer II"
          company="Solstice Power Technologies"
          content={`What truly sets Tiffany apart is her unwavering positive attitude. Every interaction with her was a pleasure, and she always brought good vibes to our conversations. Whether we were discussing complex technical issues or troubleshooting, I knew I could count on her to contribute thoughtfully and constructively.

        Her focus and dedication to her craft were evident in every project she tackled. This commitment to excellence, combined with her positive demeanor, made her an invaluable team member.

        Any team would be fortunate to have such a focused, quality-driven, and genuinely positive individual.`}
        />

        <RecommendationBox
          name="Dan McNamara"
          position="Director of Engineering"
          company="Solstice Power Technologies"
          content={`I had the privilege of managing Tiffany Do at Solstice, where I got to witness her remarkable progress and dedication as she grew from a junior engineer to an Engineer 1 over the last two years.

        Tiffany immediately impressed the team with her vast potential, eagerness to learn, and willingness to jump into any task. She joined the team to help productize EnergyScore, our ML model for more equitable energy access, but has since worked across almost all of our products. Of Tiffany's many achievements, one that impressed me the most was her effort to enhance our software’s accessibility. Through her self-directed learning, she discovered that our site wasn’t meeting all accessibility requirements and took initiative to educate the team on this shortcoming. She worked with the product management team to break down and prioritize the work, and then led implementation, improving our platform’s inclusivity and user-friendliness.

        In addition to her technical skills, Tiffany is also an incredible communicator and builder of company culture. She played a key role in mentoring junior colleagues, sharing her knowledge and fostering a strong collaborative team culture. She engaged cross-functionally to improve her knowledge of DevOps practices, testing strategies, and related workflows, enriching her understanding of the full software development lifecycle and enhancing overall team collaboration.

        I highly recommend Tiffany Do for any future opportunities. Her technical acumen, proactive mindset, and strong collaboration skills make her an outstanding addition to any team.`}
        />

        <RecommendationBox
          name="Dario Soria"
          position="Senior Full Stack Developer"
          company="Solstice Power Technologies"
          content={`I had the pleasure of working with Tiffany and can confidently say that she is an exceptional software developer. 
        
        Her proactive approach and dedication to her work are truly remarkable. She always delivers high-quality code and innovative solutions, making her an integral part of the team. 
        
        Her ability to collaborate effectively and her positive attitude make working with her an absolute pleasure. 

        Tiffany is a talented professional who would be a great asset to any team.`}
        />

        <RecommendationBox
          name="Lila Abreu"
          position="Product Manager"
          company="Solstice Power Technologies"
          content={`I had the absolute pleasure of working with Tiffany for two years at Solstice, where she was an engineer and I was a Product Manager. We collaborated closely, and I cannot recommend her more highly!

        Tiffany approaches her work with both skill and enthusiasm. Her ability to quickly grasp the complexities of various aspects of our business made her a huge asset to our team. She's a rapid learner and proactive contributor. Beyond being an excellent engineer, Tiffany brings positivity to her day-to-day and was central to our culture at Solstice.

        Any organization would be lucky to have Tiffany on board— not only will she be a fantastic teammate, she'll also be a joy to collaborate with!`}
        />
      </div>
    </WindowTemplate>
  );
}
