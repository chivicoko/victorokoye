'use client';

import Link from 'next/link'
import React from 'react'
import Form from '@/components/Form';
import { createProject, getProjectById, updateProject } from '@/lib/api';
import { ProjectProps2 } from '@/utils/types';
import { useParams, useRouter } from 'next/navigation';

const Admin = () => {
  const router = useRouter();

  const {id} = useParams();
  // console.log(id);

  // const projectId = Array.isArray(id) ? id[0] : id;

  const [project, setProject] = React.useState<ProjectProps2 | undefined>();

  React.useEffect(() => {
    if (id) {
      getProjectById(id as string)
        .then(setProject)
        .catch((error) => {
          console.error('Failed to fetch project:', error);
        });
    }
  }, [id]);

  const onSubmitProject = async (data: Partial<ProjectProps2>, isEdit: boolean) => {
    try {
      if (isEdit && id) {
        await updateProject(id as string, { ...data, id: id as string } as ProjectProps2);
      } else {
        await createProject(data as Omit<ProjectProps2, 'id'>);
      }
      router.push('/projects');
    } catch (error) {
      console.error('Failed to submit project:', error);
    }
  };    
  

  return (
    <>
      <p>ProjectsTable</p> <br />
      <Link href='/admin/single-lead' className='py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-sm my-2'>
        Single Project
      </Link>
      <br />

      {project ? <Form project={project} onSubmitProject={onSubmitProject} /> : <Form onSubmitProject={onSubmitProject} />}
    </>
  );
};


export default Admin;
