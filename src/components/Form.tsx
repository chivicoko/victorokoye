import { ProjectProps2 } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  githubLink: z.string().url("Enter a valid URL"),
  liveDemoLink: z.string().url("Enter a valid URL").optional(),
  images: z.array(z.string().url("Enter valid image URLs")).optional(),
});

type FormFields = z.infer<typeof schema>;

interface FormProps {
  project?: ProjectProps2;
  onSubmitProject: (data: FormFields, isEdit: boolean) => void;
}

const Form = ({ project, onSubmitProject }: FormProps) => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
    defaultValues: {
      name: project?.name || "",
      description: project?.description || "",
      githubLink: project?.githubLink || "",
      liveDemoLink: project?.liveDemoLink || "",
      images: project?.images || [""],
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await onSubmitProject(data, !!project); // Pass true if editing, false if creating
    } catch (error) {
      setError("root", { message: `An error occurred: ${error}` });
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
        <input {...register("name")} placeholder="Project Name" className="border py-2 px-3 rounded-md" />
        {errors.name && <div className="text-red-600 text-sm">{errors.name.message}</div>}
        
        <textarea {...register("description")} placeholder="Description" className="border py-2 px-3 rounded-md" />
        {errors.description && <div className="text-red-600 text-sm">{errors.description.message}</div>}
        
        <input {...register("githubLink")} placeholder="GitHub Link" className="border py-2 px-3 rounded-md" />
        {errors.githubLink && <div className="text-red-600 text-sm">{errors.githubLink.message}</div>}
        
        <input {...register("liveDemoLink")} placeholder="Live Demo Link (optional)" className="border py-2 px-3 rounded-md" />
        {errors.liveDemoLink && <div className="text-red-600 text-sm">{errors.liveDemoLink.message}</div>}

        <input {...register("images.0")} placeholder="Main Image URL" className="border py-2 px-3 rounded-md" />
        {errors.images && <div className="text-red-600 text-sm">{errors.images[0]?.message}</div>}
        
        <button disabled={isSubmitting} type="submit" className={`${isSubmitting ? 'opacity-60' : ''} py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-md`}>
          {isSubmitting ? "Loading..." : project ? "Update Project" : "Create Project"}
        </button>
        {errors.root && <div className="text-red-600 text-sm">{errors.root.message}</div>}
      </form>
    </div>
  );
};

export default Form;
