"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { lucario } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  filesReferences: {
    fileName: string;
    sourceCode: string;
    summary: string[];
  }[];
};

const CodeReferences = ({ filesReferences }: Props) => {
//   const [tab, setTab] = useState(filesReferences[0]?.fileName);
//   if (filesReferences.length === 0) return null;
//   return (
//     <div className="max-w-[80vw]">
//       <Tabs value={tab} onValueChange={setTab}>
//         <div className="flex gap-2 overflow-scroll rounded-md bg-gray-200 p-1">
//           {filesReferences.map((file) => (
//             <button onClick={()=> setTab(file.fileName)}
//               key={file.fileName}
//               className={cn(
//                 "whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted",
//                 {
//                   "bg-primary text-primary-foreground": tab === file.fileName,
//                 },
//               )}
//             >
//               {file.fileName}
//             </button>
//           ))}
//         </div>
//         {filesReferences.map((file) => (
//           <TabsContent
//             key={file.fileName}
//             value={file.fileName}
//             className="max-h-[60vh] max-w-7xl overflow-scroll rounded-md"
//           >
//             <SyntaxHighlighter language="typescript" style={lucario}>
//               {file.sourceCode}
//             </SyntaxHighlighter>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
};

export default CodeReferences;
