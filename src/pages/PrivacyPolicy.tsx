import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PrivacyPolicy = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/privacy.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .then((text) => console.log(text))
      .catch((err) => console.error("Error loading markdown:", err));
  }, []);

  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <h1 className="text-4xl font-bold pb-5">Privacy Policy</h1>
      <div className="prose space-y-5">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
