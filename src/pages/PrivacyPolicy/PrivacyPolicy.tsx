import ReactMarkdown from "react-markdown";
import privacy from "../../data/privacy";

const PrivacyPolicy = () => {
  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <h1 className="text-4xl font-bold pb-5">Privacy Policy</h1>
      <div className="prose space-y-5">
        {/* <ReactMarkdown>{privacy}</ReactMarkdown> */}
        <p>{privacy}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
