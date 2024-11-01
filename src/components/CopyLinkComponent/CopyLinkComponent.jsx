import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const CopyLinkComponent = () => {
  const [copied, setCopied] = useState(false);

  const link = "https://units.uz/post/oksford-kembridj";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <button onClick={handleCopy} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <FaCopy size={20} />
      </button>
      {copied && <span>Copied!</span>}
    </div>
  );
};

export default CopyLinkComponent;
