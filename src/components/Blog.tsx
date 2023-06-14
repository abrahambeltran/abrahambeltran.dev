import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const fetchMarkdownFiles = async (folderPath: string) => {
    try {
        const response = await axios.get(folderPath);
        return response.data;
    } catch (error) {
        console.error("Error fetching markdown files", error);
        return [];
    }
};
const fetchMarkdownContent = async (filePath: string) => {
    try {
      const response = await axios.get(filePath);
      return response.data;
    } catch (error) {
      console.error('Error fetching markdown content', error);
      return null;
    }
};
const Blog = ({ folderPath }: { folderPath: string }) => {
    const [fileNames, setFileNames] = useState<string[]>([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const files = await fetchMarkdownFiles(folderPath);
            setFileNames(files);
        };

        fetchFiles();
    }, [folderPath]);

    return (
        <div>
            <h1>My Blog</h1>
            {fileNames.map((fileName, index) => (
                <div key={index}>
                    <h2>{fileName}</h2>
                    <ReactMarkdown>
                        {fetchMarkdownContent(`${folderPath}/${fileName}`)}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
};

export default Blog;
