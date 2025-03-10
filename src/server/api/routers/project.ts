import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
// export const projectRouter = createTRPCRouter({
//   createProject: protectedProcedure
//     .input(
//       z.object({
//         name: z.string(),
//         githubUrl: z.string(),
//         githubToken: z.string().optional(),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       const user = await ctx.db.user.findUnique({
//         where: {
//           id: ctx.user.userId as string,
//         },
//       });
//       if (!user) {
//         throw new Error("user not found");
//       }
//       const credits = user.credits || 0;
//       const project = await ctx.db.project.create({
//         data:{
//             name:input.name,
//             githUrl: input.githubUrl,
//             githubToken: input.githubToken || null,
//         }
//       })
//     }),
// });


export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name: z.string(),
            githubUrl: z.string(),
            githubToken : z.string().optional(),
        })
    ).mutation(async({ctx, input})=>{
        const user = await ctx.db.user.findUnique({
            where:{
                id: ctx.user.userId !
            }
        })
        if(!user){
            throw new Error("user not found");
        }
        const credits = user.credits || 0;
        const project = await ctx.db.project.create({
            data:{
                name: input.name,
                githubUrl: input.githubUrl,
                githubToken : input.githubToken?
            }
        })
        
    })
})
