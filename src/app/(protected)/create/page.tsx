"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import useRefetch from "@/hooks/use-refetch"
import { useForm } from "react-hook-form";
import { api } from "@/trpc/react";
import { toast } from "sonner";


interface Inputs {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
}

export default function CreatePage() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const createProject = api.project.createProject.useMutation();
  const refetch = useRefetch();
  function onSubmit(data: Inputs) {
    createProject.mutate({
      githubUrl: data.repoUrl,
      name: data.projectName,
      githubToken: data.githubToken,
    },{
        onSuccess:()=>{
            toast.success("Project created Successfully")
            refetch();
            reset();
        },onError:()=>{
            toast.error("Failed to create a project")
        }
    });
    //window.alert(JSON.stringify(data, null, 2));
  }
  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img
        src="/code-thinking.svg"
        alt="Image"
        width={10}
        height={10}
        className="h-40 w-auto animate-bounce"
      />
      <div>
        <div>
          <h1 className="text-2xl font-semibold">
            Link your Github Repository.
          </h1>
          <p className="text-mmuted-foreground text-sm">
            Enter the URL of your repository to link it to the analysis
          </p>
        </div>
        <div className="h-4"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("projectName", { required: true })}
              placeholder="Project Name"
              required
            />
            <div className="h-2"></div>
            <Input
              {...register("repoUrl", { required: true })}
              placeholder="GithubRepo Url"
              type='url'
              required
            />
            <div className="h-2"></div>
            <Input
              {...register("githubToken")}
              placeholder="GithubToken (optional)"
            />
            <div className="h-2"></div>
            <Button type='submit' disabled={createProject.isPending}>Create Project</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
