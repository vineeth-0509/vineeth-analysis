"use client";

import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";
import Image from "next/image";
import { useState } from "react";
//import { askQuestion } from "./actions";
//import { readStreamableValue } from "ai/rsc";
import CodeReferences from "./code-references";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import useRefetch from "@/hooks/use-refetch";

const AskQuestionCard = () => {
    
//   const { project } = useProject();
//   const [open, setOpen] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [filesReferences, setFilesReferences] = useState<
//     { fileName: string; sourceCode: string; summary: string[] }[]
//   >([]);
//   const [answer, setAnswer] = useState("");
//   const saveAnswer = api.project.saveAnswer.useMutation();
//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     setAnswer("");
//     setFilesReferences([]);
//     e.preventDefault();
//     if (!project?.id) return;
//     setLoading(true);

//     const { output, filesReferences: rawFilesReferences } = await askQuestion(
//       question,
//       project.id,
//     );
//     const filesReferences = rawFilesReferences.map(
//       (file: { fileName: string; sourceCode: string; summary: string }) => ({
//         ...file,
//         summary: [file.summary],
//       }),
//     );
//     setOpen(true);
//     setFilesReferences(filesReferences);

//     for await (const delta of readStreamableValue(output)) {
//       if (delta) {
//         setAnswer((ans) => ans + delta); //this creates the streaming sequence of tokens comming 1 after one.
//       }
//     }
//     setLoading(false);
//   };
//   const refetch = useRefetch();
//   return (
//     <>
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-[80vw]">
//           <DialogHeader>
//             <div className="flex items-center gap-2" suppressHydrationWarning>
//               <DialogTitle>
//                 <Image src="/logo.png" alt="analysis" width={40} height={40} />
//               </DialogTitle>
//               <Button
//                 disabled={saveAnswer.isPending}
//                 variant={"outline"}
//                 onClick={() => {
//                   saveAnswer.mutate(
//                     {
//                       projectId: project!.id,
//                       question,
//                       answer,
//                       filesReferences,
//                     },
//                     {
//                       onSuccess: () => {
//                         toast.success("Answer saved!");
//                       },
//                       onError: () => {
//                         toast.error("Failed to save answer!");
//                       },
//                     },
//                   );
//                 }}
//               >
//                 Save Answer
//               </Button>
//             </div>
//           </DialogHeader>
//           <MDEditor.Markdown
//             source={answer}
//             className="h-full max-h-[60vh] max-w-[80vw] overflow-scroll"
//           />
//           <div className="h-4"></div>
//           <CodeReferences filesReferences={filesReferences} />

//           {/* <h1>File References</h1>
//             {filesReferences.map(file => {
//                 return <span>
//                   {file.fileName} 
//                 </span>
//             })} */}
//           <Button
//             type="button"
//             onClick={() => {
//               setOpen(false);
//             }}
//           >
//             Close
//           </Button>
//         </DialogContent>
//       </Dialog>
//       <Card className="ralative col-span-3">
//         <CardHeader>
//           <CardTitle>Ask a question</CardTitle>
//           <CardContent>
//             <form onSubmit={onSubmit}>
//               <Textarea
//                 placeholder="Which file should I edit to change the home page?"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//               />
//               <div className="mt-2 h-4">
//                 <Button type="submit" disabled={loading}>
//                   Ask Analysis!
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </CardHeader>
//       </Card>
      
//     </>
//   );
};

export default AskQuestionCard;
